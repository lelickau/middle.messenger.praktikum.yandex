import { IUser } from '../types/IUser'
import BaseAPI from './BaseAPI'

export interface SigninData {
  login: string
  password: string
}

export interface SignupData {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth')
  }

  signin(data: SigninData) {
    return this.http.post('/signin', data)
  }


  signup(data: SignupData) {
    return this.http.post('/signup', data)
  }

  read(): Promise<IUser> {
    return this.http.get('/user')
  }

  logout() {
    return this.http.post('/logout')
  }

  create = undefined
  update = undefined
  delete = undefined
}

export default new AuthAPI()
