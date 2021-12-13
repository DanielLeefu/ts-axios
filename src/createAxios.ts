import Axios from './core/Axios'
import { AixosInstance } from './types'
import { extend } from './utils'

const createInstance = (): AixosInstance => {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AixosInstance
}

const axios = createInstance()

export default axios
