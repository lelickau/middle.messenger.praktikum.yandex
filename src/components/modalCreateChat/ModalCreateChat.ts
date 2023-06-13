import { withStore } from '../../packages/store/Store'
import Block from '../../packages/block/Block'
import ChatsController from '../../controllers/ChatsController'
import Input from '../inputElement/input/Input'
import ModalsController from '../../controllers/ModalsController'
import SendBtn from '../sendBtn/SendBtn'
import ModalEditCloseButton from '../modalEditCloseButton/ModalEditCloseButton'
import template from './modalCreateChat.hbs'

class CreateChat extends Block<Record<string, never>> {
  init() {
    this.children.closeButton = new ModalEditCloseButton({
      events: {
        click: (e) => {
          e.stopPropagation()
          ModalsController.createChatToggler(false)
        }
      }
    })
    this.children.centerElement = new Input({
        type: 'text',
        name: 'title',
        id: 'title',
        label: 'Название',
        value: '',
        events: {
            input: () => {},
            blur: () => {},
            focus: () => {}
        }
    })

    this.children.mainButton = new SendBtn({
        events: {
            click: async (e: Event) => {
              const target = e.currentTarget as HTMLButtonElement
              const input = target.closest('.modals__create')?.querySelector('.input__input') as HTMLInputElement
              await ChatsController.createChat(input.value)
              await ChatsController.getChats()
              ModalsController.createChatToggler(false)
            }
        }
      })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

const withModal = withStore((state) => {
    return { ...state.modals.createChat }
})

export const ModalsCreateChat = withModal(CreateChat)
