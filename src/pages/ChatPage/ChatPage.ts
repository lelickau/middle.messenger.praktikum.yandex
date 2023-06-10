import { ModalsCreateChat } from '../../components/modalCreateChat/ModalCreateChat'
import { ModalAddUser } from '../../components/modalAddUser/ModalAddUser'
import { DialogChats } from '../../components/dialogChats/DialogChats'
import { SidebarChat } from '../../components/sidebarChat/SidebarChat'
import { ModalsDeleteUser } from '../../components/modalDeleteUser/ModalDeleteUser'
import Block from '../../packages/block/Block'
import ChatsController from '../../controllers/ChatsController'
import template from './chat.hbs'

class ChatPage extends Block<Record<string, never>> {
  init() {
    this.children.chatDialog = new DialogChats({})
    this.children.chatSidebar = new SidebarChat({ isLoading: true })

    this.children.modalsCreateChat = new ModalsCreateChat({})
    this.children.modalsAddUser = new ModalAddUser({})
    this.children.modalsDelete = new ModalsDeleteUser({})

    ChatsController.getChats().finally(() => {
      this.children.chatSidebar.setProps({ isLoading: false })
    })

  }

  render() {
    return this.compile(template, {
      ...this.props
    })
  }
}

export default ChatPage
