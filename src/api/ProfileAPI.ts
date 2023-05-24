import { IPasswordsData, IUser } from '../types/IUser'
import BaseAPI from './BaseAPI'

export class ProfileAPI extends BaseAPI {
  constructor() {
    super('/user')
  }

  editInfo(data: Omit<IUser, 'id' | 'avatar'>) {
    return this.http.put('/profile', data)
  }

  editPass(data: IPasswordsData) {
    return this.http.put('/password', data)
  }

  updateAvatar(file: FormData) {
    return this.http.put<IUser>('/profile/avatar', file)
  }

  searchUser(login: string): Promise<IUser[]> {
    return this.http.post('/search', { login })
  }

  read = undefined
  create = undefined
  update = undefined
  delete = undefined
}

export default new ProfileAPI()
