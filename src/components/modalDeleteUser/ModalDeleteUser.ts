import template from './modalDeleteUser.hbs'
import store, { withStore } from '../../packages/store/Store'
import Block from '../../packages/block/Block'
import ChatsController from '../../controllers/ChatsController'
import ModalsController from '../../controllers/ModalsController'
import SendBtn from '../sendBtn/SendBtn'
import UserItem from '../userItem/UserItem'
import UserList from '../userList/UserList'
import ModalEditCloseButton from '../modalEditCloseButton/ModalEditCloseButton'

class DeleteUser extends Block {
  constructor(props: any) {
    super({ ...props, modalsList: true })
  }
  init() {
    this.children.closeButton = new ModalEditCloseButton({
      events: {
        click: (e) => {
          e.stopPropagation()
          ModalsController.deleteUserToggler(false)
        }
      }
    })

    this.children.centerElement = this.createList(this.props)

    this.children.mainButton = new SendBtn({
      events: {
        click: async () => {
          if (!this.props.selectedUserId) return

          store.set('modals.deleteUser.isLoading', true)

          await ChatsController.deleteUser(this.props.chatId, [this.props.selectedUserId])

          store.set('chats.users', null)
          store.set('modals.deleteUser.isLoading', false)
          ModalsController.deleteUserToggler(false)
        }
      }
    })
  }

  componentDidUpdate() {
    if (this.props.show && !this.props.users) {
      ChatsController.getUsers(this.props.chatId).then((data) => {
        store.set('chats.users', data)
      })
    }

    this.children.centerElement = this.createList(this.props)
    return true
  }

  private createList(props: any) {
    return new UserList({
      users: props.users && props.users.map((item: any) => new UserItem({
        text: item.login,
        events: {
          click: () => {
            ModalsController.deleteUserSelect(item.id)
          }
        },
        selected: item.id === this.props.selectedUserId
      }))
    })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

const withModal = withStore((state) => {
    return {
      ...state.modals.deleteUser,
      userId: state.user.data?.id,
      chatId: state.chats.selectedId,
      users: state.chats.users
    }
})

export const ModalsDeleteUser = withModal(DeleteUser)
