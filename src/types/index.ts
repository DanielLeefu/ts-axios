export type Method = 'get' | 'GET' | 'post' | 'POST' | 'delete' | 'DELETE' | 'put' | 'PUT'

export interface AxiosConfigRequest {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
}
