import ChatsController from '../../controllers/ChatsController'
import ModalsController from '../../controllers/ModalsController'
import getTime from '../../helpers/getTime'
import Block from '../../packages/block/Block'
import store, { withStore } from '../../packages/store/Store'
import ContactItem from '../contactItem/ContactItem'
import CreateChatBtn from '../createChatBtn/CreateChatBtn'
import { SettingsBtn } from '../settingsBtn/SettingsBtn'
import template from './sidebarChat.hbs'

class SidebarChatArea extends Block {
  init() {
    this.children.settingsBtn = new SettingsBtn({
      to: '/settings',
      title: 'Профиль',
      events: {
        click: () => {}
      }
    })

    this.children.createChat = new CreateChatBtn({
      events: {
        click: () => {
          ModalsController.editChatsToggler(false)
          ModalsController.createChatToggler(true)
        }
      }
    })
  }
  
  protected componentDidUpdate(_: any, newProps: any): boolean {
    this.children.nodesData = this.createChats(newProps)
    return true
  }

  private createChats(props: { chats: any }) {
    console.log(props.chats)
    return props.chats.map((item: any) => new ContactItem({
      title: item.title,
      nameLetter: item.title[0].toUpperCase(),
      avatar: item.avatar,
      message: item.last_message ? item.last_message.content : null,
      time: item.last_message ? getTime(item.last_message.time) : null,
      events: {
        click: () => {
          ChatsController.selectChat(item.id)
        }
      },
      activeClass: item.id === store.getState().chats.selectedId ? 'contact--active' : ''
    }))
  }

  render() {
    return this.compile(template, {
      ...this.props
    })
  }
}

const withChat = withStore((state) => ({ ...state.user.data, ...state.modals.editChats, chats: [...(state.chats.list.data || [])] }))

export const SidebarChat = withChat(SidebarChatArea)
