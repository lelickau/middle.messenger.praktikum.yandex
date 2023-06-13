import ModalsController from '../../controllers/ModalsController'
import Block from '../../packages/block/Block'
import { withStore } from '../../packages/store/Store'
import ModalEditButton from '../modalEditButton/ModalEditButton'
import ModalEditCloseButton from '../modalEditCloseButton/ModalEditCloseButton'
import template from './modalSettingsChat.hbs'

class ModalSettings extends Block<Record<string, never>> {
  init() {
    this.children.addUserButton = new ModalEditButton({
      title: 'Добавить пользователя',
      events: {
        click: (e: Event) => {
          e.stopPropagation()
          ModalsController.editChatsToggler(false)
          ModalsController.addUserToggler(true)
        }
      }
    })

    this.children.deleteUserButton = new ModalEditButton({
      title: 'Удалить пользователя',
      events: {
        click: (e: Event) => {
          e.stopPropagation()
          ModalsController.editChatsToggler(false)
          ModalsController.deleteUserToggler(true)
        }
      }
    })

    this.children.closeButton = new ModalEditCloseButton({
      events: {
        click: (e: Event) => {
          e.stopPropagation()
          ModalsController.editChatsToggler(false)
        }
      }
    })
  }

  render() {
    return this.compile(template, {
      ...this.props
    })
  }
}

const withChatModal = withStore(state => ({ ...state.modals.editChats, ...state.chats }))

export const ModalSettingsChat = withChatModal(ModalSettings)
