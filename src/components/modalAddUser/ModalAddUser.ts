import template from './modalAddUser.hbs'
import { withStore } from '../../packages/store/Store'
import Block from '../../packages/block/Block'
import ChatsController from '../../controllers/ChatsController'
import Input from '../inputElement/input/Input'
import ModalsController from '../../controllers/ModalsController'
import SendBtn from '../sendBtn/SendBtn'
import ProfileController from '../../controllers/ProfileController'
import ModalEditCloseButton from '../modalEditCloseButton/ModalEditCloseButton'
import ErrorItem from '../errorItem/ErrorItem'

class AddUser extends Block<Record<string, never>> {
  init() {
    this.children.closeButton = new ModalEditCloseButton({
      events: {
        click: (e) => {
          e.stopPropagation()
          ModalsController.addUserToggler(false)
        }
      }
    })

    this.children.centerElement = new Input({
        type: 'text',
        name: 'title',
        id: 'title',
        label: 'Имя пользователя',
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
          e.stopPropagation()
          const target = e.currentTarget as HTMLButtonElement
          const input = target.closest('.modals__add')?.querySelector('.input__input') as HTMLInputElement
          
          const user = await ProfileController.searchUser(input.value)
          if (user.length === 0) {
            return ModalsController.addUserSerError('Пользователь не найден')
          }

          await ChatsController.addUser(this.props.chatId, [user[0].id])

          return ModalsController.addUserToggler(false)
        }
      }

    })

    this.children.error = new ErrorItem({
      text: ''
    })
  }

  componentDidUpdate() {
    this.children.error = this.createError(this.props)
    return true
  }

  private createError(props: any) {
    return new ErrorItem({
      text: props.error || ''
    })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

const withModal = withStore((state) => {
    return { ...state.modals.addUser,
      userId: state.user.data?.id,
      chatId: state.chats.selectedId }
})

export const ModalAddUser = withModal(AddUser)
