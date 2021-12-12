import { isPlainObject } from './index'

export const buildPayload = (data: any): any => {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export const autoTransfrom = (val: any): any => {
  if (typeof val === 'string') {
    try {
      val = JSON.parse(val)
    } catch (err) {
      console.log(err)
    }
  }

  return val
}
