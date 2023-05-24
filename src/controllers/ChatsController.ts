import { ChatsAPI } from '../api/ChatsAPI'
import store from '../packages/store/Store'
import { IUser } from '../types/IUser'
import MessagesController from './MessagesController'


class ChatsController {
  private api: ChatsAPI

  constructor() {
    this.api = new ChatsAPI()
  }

  async getChats() {
    store.set('chats.list.isLoading', true)

    try {
      const chatsList = await this.api.read()

      chatsList.map(async (chat) => {
        const token = await this.getToken(chat.id)

        await MessagesController.connect(chat.id, token)
      })

      store.set('chats.list.data', chatsList)
    } catch (error) {
      store.set('chats.list.error', (error as Error).message)
    } finally {
      store.set('chats.list.isLoading', false)
    }

  }

  getToken(id: number) {
    return this.api.getToken(id)
  }

  async createChat(title: string) {
    store.set('modals.createChat.isLoading', true)

    try {
      await this.api.create(title)
    } catch (error) {
      store.set('modals.createChat.error', (error as Error).message)
    } finally {
      store.set('modals.createChat.isLoading', false)
    }

  }

  selectChat(id: number) {
    store.set('chats.selectedId', id)
  }

  async addUser(id: number, users: number[]) {
    store.set('modals.addUser.isLoading', true)

    try {
      await this.api.addUsers(id, users)
    } catch (error) {
      store.set('modals.addUser.error', (error as Error).message)
    } finally {
      store.set('modals.addUser.isLoading', false)
    }

  }

  
  async getUsers(id: number): Promise<IUser[]> {
    return this.api.getUsers(id)
  }

  async deleteUser(id: number, users: number[]) {
    store.set('modals.deleteUser.isLoading', true)

    try {
      await this.api.deleteUsers(id, users)
    } catch (error) {
      store.set('modals.deleteUser.error', (error as Error).message)
    } finally {
      store.set('modals.deleteUser.isLoading', false)
    }

  }

}

export default new ChatsController()

