import { AxiosConfigRequest, AxiosPromise } from '../types'
import { axiosDispatch } from './axiosDispatch'

export default class Axios {
  request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }

    console.log(config, '--config')

    return axiosDispatch(config)
  }

  get(url: string, config?: AxiosConfigRequest): AxiosPromise {
    return this.request(
      Object.assign(config || {}, {
        method: 'get',
        url
      })
    )
  }

  post(url: string, data?: any, config?: AxiosConfigRequest): AxiosPromise {
    return this.request(
      Object.assign(config || {}, {
        method: 'post',
        url,
        data,
        isConfig: 'xxxxxx'
      })
    )
  }

  delete(url: string, config?: AxiosConfigRequest): AxiosPromise {
    return this.request(
      Object.assign(config || {}, {
        method: 'delete',
        url
      })
    )
  }

  head(url: string, config?: AxiosConfigRequest): AxiosPromise {
    return this.request(
      Object.assign(config || {}, {
        method: 'head',
        url
      })
    )
  }

  options(url: string, config?: AxiosConfigRequest): AxiosPromise {
    return this.request(
      Object.assign(config || {}, {
        method: 'options',
        url
      })
    )
  }
}
