import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon'
import { expect } from 'chai'

import { ProfileAPI } from './ProfileAPI'

describe('ProfileAPI', () => {
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

  it('Should be called PUT with correct props on editInfo()', () => {
    const api = new ProfileAPI()
    const data = {
      first_name: 'test',
      second_name: 'test',
      display_name: 'test',
      login: 'test',
      email: 'test',
      phone: 1
    }

    api.editInfo(data)
    const [request] = requests

    expect(request.method).to.eq('PUT')
    expect(request.requestBody).to.eq(JSON.stringify(data))
  })

  it('Should be called PUT with correct props on updateAvatar()', () => {
    const api = new ProfileAPI()
    const data = new FormData()
    data.append('key1', 'value1')

    api.updateAvatar(data)
    const [request] = requests

    expect(request.method).to.eq('PUT')
    expect(request.requestBody).to.eq(data)
  })

  it('Should be called PUT with correct props on editPass()', () => {
    const api = new ProfileAPI()
    const data = {
      oldPassword: 'test',
      newPassword: 'test'
    }

    api.editPass(data)
    const [request] = requests

    expect(request.method).to.eq('PUT')
    expect(request.requestBody).to.eq(JSON.stringify(data))
  })

  it('Should be called POST with correct props on searchUser()', () => {
    const api = new ProfileAPI()
    const data = {
      login: 'login'
    }

    api.searchUser('login')
    const [request] = requests

    expect(request.method).to.eq('POST')
    expect(request.requestBody).to.eq(JSON.stringify(data))
  })
})
