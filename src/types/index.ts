export type Method = 'get' | 'GET' | 'post' | 'POST' | 'delete' | 'DELETE' | 'put' | 'PUT'

export interface AxiosConfigRequest {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosConfigRequest
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosConfigRequest
  code?: string | null
  request?: any
  response?: AxiosResponse
}
