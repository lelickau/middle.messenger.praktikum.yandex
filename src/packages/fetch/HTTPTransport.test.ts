import { expect } from 'chai'
import sinon from 'sinon'

import HTTPTransport from './HTTPTransport'

describe('HTTPTransport', () => {
  const requests: sinon.SinonFakeXMLHttpRequest[] = []
  const transport = new HTTPTransport('/')
  const reqBody = { number: 1 }

  before(() => {
    const XHR = sinon.useFakeXMLHttpRequest()

    // @ts-ignore
    global.XMLHttpRequest = XHR

    XHR.onCreate = (xhr) => {
      requests.push(xhr)
    }
  })

  beforeEach(() => {
    requests.length = 0
  })

  it('Should make GET request', () => {
    transport.get('/')

    expect(requests[0].method).to.eq('GET')
  })

  describe('PUT method', () => {
    it('Should make PUT request', () => {
      transport.put('/')

      expect(requests[0].method).to.eq('PUT')
    })

    it('Should make PUT request with passed body', () => {
      transport.put('/', reqBody)

      expect(requests[0].requestBody).to.eq(JSON.stringify(reqBody))
    })
  })

  describe('POST method', () => {
    it('Should make POST request', () => {
      transport.post('/')

      expect(requests[0].method).to.eq('POST')
    })

    it('Should make POST request with passed body', () => {
      transport.post('/', reqBody)

      expect(requests[0].requestBody).to.eq(JSON.stringify(reqBody))
    })
  })

  describe('DELETE method', () => {
    it('Should make DELETE request', () => {
      transport.delete('/')

      expect(requests[0].method).to.eq('DELETE')
    })

    it('Should make DELETE request with passed body', () => {
      transport.delete('/', reqBody)

      expect(requests[0].requestBody).to.eq(JSON.stringify(reqBody))
    })
  })
})
