import queryStringify from "../../helpers/queryStringify"

enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type Options = {
  method: Methods
  data?: any
}

class HTTPTransport {
  public get<Response>(url: string, options: Options): Promise<Response> {
    const queryStr = queryStringify(options.data)
		return this.request<Response>(`${url+queryStr}`, { method: Methods.GET})
	}
  
  public post<Response = void>(url: string, options: Options, data?: any): Promise<Response> {
    return this.request(url, {...options, method: Methods.POST, data })
  }

  public put<Response = void>(url: string, options: Options, data?: any): Promise<Response> {
    return this.request(url, {...options, method: Methods.PUT, data })
  }

  public delete<Response>(url: string, options: Options, data?: any): Promise<Response> {
    return this.request(url, {...options, method: Methods.DELETE, data })
  }

	private request<Response>(
    url: string, options: Options = { method: Methods.GET }
  ): Promise<Response> {
    const { method, data } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)

      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response)
          } else {
            reject(xhr.response)
          }
        }
      }

      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject

      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.withCredentials = true
      xhr.responseType = 'json'

      if (method === Methods.GET || !data) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }
    })
  }
}

export default HTTPTransport
