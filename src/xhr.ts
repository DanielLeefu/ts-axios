import { AxiosConfigRequest } from './types'

const xhr = (config: AxiosConfigRequest): void => {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}

export default xhr
