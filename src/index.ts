import { AxiosConfigRequest } from './types'
import xhr from './xhr'
import { buildURL } from './utils/url'

const transformURL = (config: AxiosConfigRequest): string => {
  const { url, params } = config
  return buildURL(url, params)
}

const processConfig = (config: AxiosConfigRequest): void => {
  config.url = transformURL(config)
}

const axios = (config: AxiosConfigRequest): void => {
  processConfig(config)
  xhr(config)
}

export default axios
