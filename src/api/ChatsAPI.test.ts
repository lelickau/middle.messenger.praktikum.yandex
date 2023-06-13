import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon'
import { expect } from 'chai'

import { ChatsAPI } from './ChatsAPI'

describe('ChatsAPI', () => {
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

  it('Should be called POST with correct props on create()', () => {
    const api = new ChatsAPI()
    const data = 'title'

    api.create(data)
    const [request] = requests

    expect(request.method).to.eq('POST')
    expect(request.requestBody).to.eq(JSON.stringify({ title: data }))
  })

  it('Should be called DELETE with correct props on delete()', () => {
    const api = new ChatsAPI()
    const data = 1

    api.delete(data)
    const [request] = requests

    expect(request.method).to.eq('DELETE')
    expect(request.requestBody).to.eq(JSON.stringify({ chatId: data }))
  })

  it('Should be called PUT with correct props on addUsers()', () => {
    const api = new ChatsAPI()
    const dataId = 1
    const users = [1, 1, 1]

    api.addUsers(dataId, users)
    const [request] = requests

    expect(request.method).to.eq('PUT')
    expect(request.requestBody).to.eq(JSON.stringify({ users, chatId: dataId }))
  })

  it('Should be called DELETE with correct props on deleteChat()', () => {
    const api = new ChatsAPI()
    const data = 10

    api.deleteChat(data)
    const [request] = requests

    expect(request.method).to.eq('DELETE')
    expect(request.requestBody).to.eq(JSON.stringify({ chatId: data }))
  })

  it('Should be called DELETE with correct props on deleteUsers()', () => {
    const api = new ChatsAPI()
    const dataId = 1
    const users = [1, 1, 1]

    api.deleteUsers(dataId, users)
    const [request] = requests

    expect(request.method).to.eq('DELETE')
    expect(request.requestBody).to.eq(JSON.stringify({ users, chatId: dataId }))
  })
})
