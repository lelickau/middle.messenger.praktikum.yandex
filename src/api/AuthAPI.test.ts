import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon'
import { expect } from 'chai'

import { AuthAPI } from './AuthAPI'

describe('AuthAPI', () => {
  let xhr: SinonFakeXMLHttpRequestStatic
  const requests: SinonFakeXMLHttpRequest[] = []

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest()

    // @ts-ignore
    global.XMLHttpRequest = xhr

    xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
      requests.push(request)
    })
  })

  afterEach(() => {
    requests.length = 0
  })

  it('Should be called POST with correct props on signin()', () => {
    const api = new AuthAPI()
    const data = {
      login: 'login',
      password: 'password'
    }

    api.signin(data)
    const [request] = requests

    expect(request.method).to.eq('POST')
    expect(request.requestBody).to.eq(JSON.stringify(data))
  })

  it('Should be called POST with correct props on signup()', () => {
    const api = new AuthAPI()
    const data = {
      first_name: 'first_name',
      second_name: 'second_name',
      login: 'login',
      email: 'email',
      password: 'password',
      phone: 'phone'
    }

    api.signup(data)
    const [request] = requests

    expect(request.method).to.eq('POST')
    expect(request.requestBody).to.eq(JSON.stringify(data))
  })
})
