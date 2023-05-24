import store from '../packages/store/Store'

class ModalsController {
  constructor() {
    this.modalsFileToggle = this.modalsFileToggle.bind(this)
  }

  addUserToggler(toggler: boolean) {
    store.set('modals.addUser.show', toggler)
  }

  addUserSerError(error: string) {
    store.set('modals.addUser.error', error)
  }

  deleteUserToggler(toggler: boolean) {
    store.set('modals.deleteUser.show', toggler)
  }

  deleteUserSerError(error: string) {
    store.set('modals.deleteUser.error', error)
  }

  deleteUserSelect(id: number) {
    store.set('modals.deleteUser.selectedUserId', id)
  }

  modalsFileToggle(toggler: boolean) {
    store.set('modals.file.show', toggler)
  }

  modalsFileSetFile(file: File) {
    store.set('modals.file.file', file)
  }

  modalsFileSetText(text: string) {
    store.set('modals.file.text', text)
  }

  editChatsToggler(toggler: boolean) {
    store.set('modals.editChats.show', toggler)
  }

  createChatToggler(toggler: boolean) {
    store.set('modals.createChat.show', toggler)
  }
}

export default new ModalsController()
