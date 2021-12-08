import { isPlainObject } from './index'

function transfromHeaders(headers: any, headersName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== headersName && name.toLowerCase() === headersName.toLowerCase()) {
      headers[headersName] = headers[name]
      delete headers[name]
    }
  })
}

export function buildHeaders(headers: any, data: any): any {
  transfromHeaders(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;chartset=utf-8'
    }
  }

  return headers
}
