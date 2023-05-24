import API, { ProfileAPI } from '../api/ProfileAPI'
import store from '../packages/store/Store'
import { IUser } from '../types/IUser'

export class ProfileController {
  private readonly api: ProfileAPI
  
  constructor() {
    this.api = API
  }

  async updateInfo(data: Omit<IUser, 'id' | 'avatar'>) {
    store.set('user.isLoading', true)

    try {
      const updatedUser = await this.api.editInfo(data)
      store.set('user.data', updatedUser)

    } catch (e) {
      store.set('user.error', (e as Error).message)
    } finally {
      store.set('user.isLoading', false)
    }
  }

  async updateAvatar(file: File) {
    store.set('user.isLoading', true)

    try {
      const formData = new FormData()
      formData.append('avatar', file)
      const updatedUser = await this.api.updateAvatar(formData)

      store.set('user.data', updatedUser)
    } catch (e) {
      store.set('user.error', (e as Error).message)
    } finally {
      store.set('user.isLoading', false)
    }

  }

  async updatePassword(data: { old_password: string, new_password: string }) {
    store.set('user.isLoading', true)

    try {
      await this.api.editPass({
        oldPassword: data.old_password,
        newPassword: data.new_password
      })
    } catch (e) {
      store.set('user.error', (e as Error).message)
    } finally {
      store.set('user.isLoading', false)
    }

  }

  async searchUser(login: string): Promise<IUser[]> {
    const response = await this.api.searchUser(login)

    return response
  }
}

export default new ProfileController()
