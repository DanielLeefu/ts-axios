import { isPlainObject } from './index'

export const buildPayload = (data: any): any => {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
