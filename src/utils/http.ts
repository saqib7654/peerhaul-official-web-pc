import axios from 'axios'
import { message } from 'ant-design-vue'
import Router from '@/router/index'


import type {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'

export type { AxiosRequestConfig } from 'axios'

/** 返回数据的结果类型 */
export interface ResponseType<T> {
  code: number
  msg: string
  data: T
}
/** 业务错误类型 */
export type ErrorInfo = {
  field: string
  info: string
}
/** 接口报错时的错误类型 */
export type ErrorRes = {
  error: string
  message: string
  path: string
  status: number
  timestamp: string
}
/** 接口正常时统一返回类型 */
export type Result<T> = {
  code: number
  data: T
  error: ErrorInfo[]
  message: string
}

message.config({
  duration: 2, // 提示时常单位为s

  //   top: '200px', // 距离顶部的位置

  maxCount: 1 // 最多显示提示信息条数(后面的会替换前面的提示)
})

const baseURL = (import.meta.env.VITE_APP_BASEURL_API || '/') as string

export const http = axios.create({
  baseURL,
  withCredentials: true, // 是否跨站点访问控制请求
  timeout: 60 * 1000 * 15 // 超时时间 十五分钟
})

// 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
http.defaults.headers.get['Content-Type'] =
  'application/x-www-form-urlencoded;charset=utf-8'
http.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

// 请求拦截器
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 支持restful格式的api /news/detail/{id}
    /** 数据 */
    const body = config.params || config.data
    // eslint-disable-next-line no-param-reassign
    config.url = config.url?.replace(/\{(.+?)\}/g, (_: string, key: string) => {
      const result = body[key] || ''
      return result
    })
    const { token } = JSON.parse(
      localStorage.getItem('user_info') || '{}'
    )

    // 根据条件加入token-安全携带
    if (!config.headers) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {} as InternalAxiosRequestConfig['headers']
    }
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = token
    }

    return config
  },
  (error) => {
    return Promise.resolve(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 统一处理状态
    const { status, data } = response
    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      // eslint-disable-next-line no-console
      return Promise.reject(response)
      // Notify(msg);
    }
    if (status === 200) {
      if (data?.code === 401) {
        // 处理http错误，抛到业务代码
        // eslint-disable-next-line no-console
        message.error(data.message || 'Not Login')
        Router.push({ name: 'Login' })
        return Promise.reject(response)
      }
      if (data && data.code === 500) {
        // 处理http错误，抛到业务代码
        // eslint-disable-next-line no-console
        message.error(data.message || 'Network Error')
        return Promise.reject(response)
      }
      return response
    }
    return response
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log('Interface interceptedr', error)
    message.error('Network Error')
    return Promise.reject(error)
  }
)

async function request<
  T = unknown,
  C extends boolean = false,
  R = C extends true ? T : Result<T>
>(
  config: AxiosRequestConfig
): Promise<[null, R] | [ErrorRes | Record<string, never>]> {
  try {
    return [null, (await http.request<R, AxiosResponse<R>>(config)).data]
  } catch (e) {
    return [(e as AxiosError<ErrorRes>).response?.data || {}]
  }
}

const generateApi =
  <T = unknown, R = unknown, C extends boolean = false>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    generateConfig?: AxiosRequestConfig
  ) =>
    (data: T, config?: AxiosRequestConfig) =>
      request<R, C>({
        url,
        method,
        ...(method === 'GET' ? { params: data } : { data }),
        ...generateConfig,
        ...config
      })

export default request
export { generateApi }
