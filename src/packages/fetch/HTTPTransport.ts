enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

function queryStringify(data: Record<string, unknown>): string {
  const paramsArray: string[] = []

  Object.entries(data).forEach(([key, value], index) => {
    const prefix = index === 0 ? '?' : '&'

    paramsArray.push(`${prefix}${key}=${value}`)
  })

  return paramsArray.join('')
}


type Options = {
  method: Methods
  data?: Record<string, unknown>
  options?: Record<string, string>,
  timeout?: number,
  headers?: Record<string, string>
}

interface IHTTPMethod {
  <Response>(path: string, data?: { [key: string]: any }): Promise<Response>
}

class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2'
  protected endpoint: string

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`
  }

  public get: IHTTPMethod = (path = '/', data) => {
    let newPath = this.endpoint + path

    if (data) newPath += queryStringify(data)

    return this.request(newPath, { method: Methods.GET })
  }
  
  public post: IHTTPMethod = (path, data) => this.request(
    this.endpoint + path,
    { method: Methods.POST, data }
  )

  public put: IHTTPMethod = (path, data) => this.request(
    this.endpoint + path,
    { method: Methods.PUT, data }
  )

  public delete: IHTTPMethod = (path, data) => this.request(
    this.endpoint + path,
    { method: Methods.DELETE, data }
  )

	private request = <Response>(
    url: string, options: Options = { method: Methods.GET }
  ): Promise<Response> => {
    const { method, data, headers } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value))
      }

      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response)
          } else {
            reject(xhr.response)
          }
        }
      }

      xhr.onabort = () => reject({reason: 'abort'})
      xhr.onerror = () => reject({reason: 'network error'})
      xhr.ontimeout = () => reject({reason: 'timeout'})

      xhr.withCredentials = true
      xhr.responseType = 'json'
      
      if (method === Methods.GET || !data) {
        xhr.send()
      } else if (data instanceof FormData) { 
        xhr.send(data)
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(data))
      }
    })
  }
}

export default HTTPTransport
