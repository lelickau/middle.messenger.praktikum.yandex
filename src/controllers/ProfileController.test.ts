import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon'
import { expect } from 'chai'

import ProfileController from './ProfileController'

describe('ProfileController', () => {
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

  it('Should be called PUT with correct props on updateInfo()', () => {
    const data = {
      first_name: 'test',
      second_name: 'test',
      display_name: 'test',
      login: 'test',
      email: 'test',
      phone: 1
    }

    ProfileController.updateInfo(data)
    const [request] = requests

    expect(request.method).to.eq('PUT')
    expect(request.requestBody).to.eq(JSON.stringify(data))
  })

  it('Should be called PUT with correct props on updateAvatar()', () => {
    const file = 'file' as unknown as File
    const formData = new FormData()
    formData.append('avatar', file)

    ProfileController.updateAvatar(file)
    const [request] = requests

    expect(request.method).to.eq('PUT')
    expect(request.requestBody).to.deep.eq(formData)
  })

  it('Should be called PUT with correct props on updatePassword()', () => {
    const data = {
      old_password: 'test',
      new_password: 'test'
    }
    const expectedOutput = {
      oldPassword: 'test',
      newPassword: 'test'
    }

    ProfileController.updatePassword(data)
    const [request] = requests

    expect(request.method).to.eq('PUT')
    expect(request.requestBody).to.eq(JSON.stringify(expectedOutput))
  })

  it('Should be called POST with correct props on searchUser()', () => {
    const expectedOutput = {
      login: 'login'
    }

    ProfileController.searchUser('login')
    const [request] = requests

    expect(request.method).to.eq('POST')
    expect(request.requestBody).to.eq(JSON.stringify(expectedOutput))
  })
})
