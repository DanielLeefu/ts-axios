import { AxiosConfigRequest, AxiosPromise } from './types'
import xhr from './xhr'
import { buildURL } from './utils/url'
import { buildPayload } from './utils/payload'
import { buildHeaders } from './utils/header'
import { autoTransfrom } from './utils/payload'

const transformURL = (config: AxiosConfigRequest): string => {
  const { url, params } = config
  return buildURL(url, params)
}

const transformData = (config: AxiosConfigRequest): string => {
  const { data } = config
  return buildPayload(data)
}

const transformHeaders = (config: AxiosConfigRequest): string => {
  const { headers = {}, data } = config
  return buildHeaders(headers, data)
}

const processConfig = (config: AxiosConfigRequest): void => {
  config.headers = transformHeaders(config)
  config.url = transformURL(config)
  config.data = transformData(config)
}

const axios = (config: AxiosConfigRequest): AxiosPromise => {
  processConfig(config)
  return xhr(config).then(res => {
    const { data } = res
    return {
      ...res,
      data: autoTransfrom(data)
    }
  })
}

export default axios
