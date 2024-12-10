import { defineConfig } from 'yapi-to-typescript'

export default defineConfig([
    {
        serverUrl: 'http://192.168.2.9:3000/',
        typesOnly: true,
        target: 'typescript',
        reactHooks: {
            enabled: false
        },
        prodEnvName: 'production',
        outputFilePath: 'src/api/index.ts',
        requestFunctionFilePath: 'src/api/request.ts',
        dataKey: 'data',
        projects: [
            {
                token: [
                    '5c4011cefa9121eb9c923daa0fb7c8ba8c3d411820141cc6084bd92187ea72e9',
                    '218b65be237b2b8d3ca554263fda2ac99042058002798c602c291379e49a490b',
                    '89bdfd73ec62009674ea280ffdaae00b4621162f95eae1892275852c45a78521'
                ],
                categories: [
                    {
                        id: 0,
                        getRequestFunctionName(interfaceInfo, changeCase) {
                            // 以接口全路径生成请求函数名
                            return changeCase.camelCase(interfaceInfo.path)

                            // 若生成的请求函数名存在语法关键词报错、或想通过某个关键词触发 IDE 自动引入提示，可考虑加前缀，如:
                            // return changeCase.camelCase(`api_${interfaceInfo.path}`)

                            // 若生成的请求函数名有重复报错，可考虑将接口请求方式纳入生成条件，如:
                            // return changeCase.camelCase(`${interfaceInfo.method}_${interfaceInfo.path}`)
                        }
                    }
                ]
            }
        ]
    }
])
