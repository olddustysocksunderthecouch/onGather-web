export interface FetchOptions {
  url: string
  method: 'GET' | 'POST'
  headers: { [key: string]: string }
  body?: any
}
