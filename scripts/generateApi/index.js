import axios from 'axios'
import fs from 'fs-extra'
import path from 'path'
import os from 'os'
import { fileURLToPath } from 'url'
import ora from 'ora'
import { createRequire } from 'module'
import { upperFirst, camelCase } from 'lodash-es'

const require = createRequire(import.meta.url)

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

/**
 * 从 ytt.config.ts 文件中读取 serverUrl 和 token
 * @returns
 */
const readConfig = async () => {
    const configFilePath = path.join(process.cwd(), 'ytt.config.ts')

    if (await fs.pathExists(configFilePath)) {
        const config = require(configFilePath).default?.[0]

        const { serverUrl, projects } = config || {}
        const token = projects?.[0]?.token

        return {
            serverUrl,
            token
        }
    }

    return {}
}

/**
 * @typedef {Object} FilterList
 * @property {string[]} [exclude] 需要排除的内容
 * @property {string[]} [include] 需要包含的内容
 */

/**
 * @typedef {Object} Config 配置选项
 * @property {string} [serverUrl] 服务器域名
 * @property {string} [token] 项目 token
 * @property {string} [dirPath] 生成文件的文件夹路径
 * @property {FilterList} [categoryConfig] 分类相关配置
 * @property {FilterList} [interfaceConfig] 接口相关配置
 */

/**
 * 生成自定义的 api 接口
 * @param {Config} option 配置选项
 */
const generateApi = async (option = {}) => {
    const spinner = ora('开始生成接口').start()

    let {
        dirPath = 'src/api',
        categoryConfig,
        interfaceConfig,
        serverUrl,
        token
    } = option

    if (!(serverUrl && token)) {
        const { serverUrl = u, token = t } = await readConfig()

        serverUrl = u
        token = t
    }

    if (!(serverUrl && token))
        return spinner.fail('无法获取到 serverUrl 和 token')

    const host = serverUrl.replace(/\/$/, '')

    try {
        const {
            data: {
                data: { _id }
            }
        } = await axios(`${host}/api/project/get`, {
            method: 'GET',
            params: {
                token
            }
        })

        const {
            data: {
                data: { list: apiList }
            }
        } = await axios(`${host}/api/interface/list`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json	'
            },
            params: {
                project_id: _id,
                token,
                page: 1,
                limit: 1000
            }
        })

        const apiMap = new Map()

        for (const item of apiList) {
            const { _id: intid, catid } = item

            const { exclude: catExclude, include: catInclude } =
                categoryConfig || {}
            const { exclude: intExclude, include: intInclude } =
                interfaceConfig || {}

            if (
                !(
                    !catExclude?.includes(catid) &&
                    (!catInclude || catInclude.includes(catid)) &&
                    !intExclude?.includes(intid) &&
                    (!intInclude || intInclude.includes(intid))
                )
            )
                continue

            const key = item.path
                .replace(/\/\{[\w{}/\\]+\}$/, '')
                .split('/')
                .slice(0, -1)
                .join('/')

            if (apiMap.has(key)) {
                apiMap.get(key).push(item)
            } else {
                apiMap.set(key, [item])
            }
        }

        spinner.text = '接口数据获取成功，开始生成文件'

        for (const [key, val] of apiMap) {
            const typeList = [],
                codeList = []

            for (const api of val) {
                let paramsNum = 0

                const pathArr = api.path.split('/').map(item => {
                    if (/\{\w+\}/.test(item)) {
                        paramsNum++
                        return item.replace(/\{(\w+)\}/, '$1')
                    }

                    return item
                })

                const typeName = pathArr
                    .map(item => (item ? upperFirst(camelCase(item)) : ''))
                    .join('')
                const { title, method } = api

                const templateMap = {
                    typeName,
                    comment: title,
                    method,
                    url: api.path,
                    name: camelCase(pathArr[pathArr.length - 1 - paramsNum])
                }

                const template = await fs.readFile(
                    path.resolve(__dirname, './template.txt'),
                    'utf-8'
                )

                const generateCode = template.replace(
                    /#\{(\w+)\}/g,
                    (_, p1) => {
                        return templateMap[p1]
                    }
                )

                typeList.push(`${typeName}Request`, `${typeName}Response`)
                codeList.push(generateCode)
            }

            const typeImport = `import type { ${typeList.join(
                ', '
            )} } from '@/api'`
            const fnImport = `import { generateApi } from '@/utils/http'`

            const writePath = path.join(process.cwd(), dirPath, `${key}.ts`)
            const finalCode = [
                '// 自动生成接口，请勿直接修改!!!',
                typeImport,
                fnImport,
                ...codeList
            ].join(os.EOL)

            await fs.ensureFile(writePath)
            await fs.writeFile(writePath, finalCode, 'utf-8')
        }

        spinner.succeed('生成接口完成')
    } catch (e) {
        console.log(e)
        spinner.fail('生成接口失败')
    }
}

export default generateApi
