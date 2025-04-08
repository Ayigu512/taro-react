import type { AxiosError } from 'axios'
import Taro from '@tarojs/taro'
import axios from 'axios'

type ErrorHandler = (error: AxiosError) => Promise<never>

export function createNetworkErrorHandler(): ErrorHandler {
  return async (error) => {
    const networkType = await Taro.getNetworkType()
    if (networkType === 'none') {
      console.error('网络连接异常，请检查网络设置')
    }
    else if (error.code === 'ECONNABORTED') {
      console.error('请求超时，请重试')
    }
    return Promise.reject(error)
  }
}

export function createAuthErrorHandler(): ErrorHandler {
  return async (error) => {
    const { response } = error
    if (response?.status === 401) {
      console.error('登录状态已过期，请重新登录')
      await Taro.removeStorage({ key: 'token' })
      Taro.navigateTo({ url: '/pages/login/index' })
    }
    return Promise.reject(error)
  }
}

export function createRetryInterceptor(maxRetries: number) {
  let retryCount = 0
  return async (error: AxiosError) => {
    const config = error.config
    if (!config || retryCount >= maxRetries)
      return Promise.reject(error)

    if (error.response?.status === 503 || error.code === 'ECONNABORTED') {
      retryCount++
      await new Promise(resolve => setTimeout(resolve, 1000 * retryCount))
      return axios.request(config)
    }
    return Promise.reject(error)
  }
}
