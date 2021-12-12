import { AxiosConfigRequest, AxiosPromise, AxiosResponse } from './types'
import { headerStringToObj } from './utils/header'

import { createError } from './utils/error'

const xhr = (config: AxiosConfigRequest): AxiosPromise => {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout
    }

    request.open(method.toUpperCase(), url, true)

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }

      // 网路错误或者超市错误，状态为0
      if (request.status === 0) {
        return
      }

      const responseHeaders = headerStringToObj(request.getAllResponseHeaders())
      // 将headers字符串换为对象形式

      const responseData = responseType !== 'text' ? request.response : request.responseText

      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }

      handleResponse(response)
    }

    request.onerror = function handleError() {
      reject(new Error('网络错误'))
      reject(createError('Network Error', config, null, request))
    }

    request.ontimeout = function handlTimeout() {
      reject(createError(`time out ${timeout}`, config, 'ERROR', request))
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    request.send(data)

    // 错误处理逻辑
    const handleResponse = (response: AxiosResponse): void => {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(new Error(`请求失败${response.status}`))
      }
    }
  })
}

export default xhr
