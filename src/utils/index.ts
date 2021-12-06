const toString = Object.prototype.toString

export const isData = (val: any): val is Date => {
  return toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
