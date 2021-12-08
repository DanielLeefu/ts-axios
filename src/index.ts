import { AxiosConfigRequest } from './types'
import xhr from './xhr'
import { buildURL } from './utils/url'
import { buildPayload } from './utils/payload'

const transformURL = (config: AxiosConfigRequest): string => {
  const { url, params } = config
  return buildURL(url, params)
}

const transformData = (config: AxiosConfigRequest): string => {
  const { data } = config
  return buildPayload(data)
}

const processConfig = (config: AxiosConfigRequest): void => {
  config.url = transformURL(config)
  config.data = transformData(config)
}

const axios = (config: AxiosConfigRequest): void => {
  processConfig(config)
  xhr(config)
}

export default axios
