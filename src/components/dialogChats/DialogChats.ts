import { DialogChatMessages } from '../dialogChatMessages/DialogChatMessages'
import { IState, withStore } from '../../packages/store/Store'
import Block from '../../packages/block/Block'
import ChatHeader from '../chatHeader/ChatHeader'
import Send from '../send/Send'
import MessagesController from '../../controllers/MessagesController'
import ModalsController from '../../controllers/ModalsController'
import template from './dialogChats.hbs'

interface IDialogChatsArea {
  show: boolean
}

class DialogChatsArea extends Block<IState['chats'] & IDialogChatsArea> {
  init() {
    this.children.chatHeader = this.createDialogChatHeader(this.props)
    this.children.chatDialogMessages = new DialogChatMessages({})
    this.children.send = new Send({
      sendInput: {
        label: 'Сообщение',
        name: 'message',
        events: {
          input: () => {},
          blur: () => {},
          focus: () => {}
        }
      },
      sendBtn: {},
      events: {
        submit: (e) => {
          e.preventDefault()

          const message = document.querySelector('.send-input__input') as HTMLInputElement

          if (message.value.length === 0) return

          MessagesController.sendMessage(this.props.selectedId!, message.value)

          message.value = ''
        }
      }
    })
  }

  componentDidUpdate(_: any, newProps: any) {
    this.children.chatHeader = this.createDialogChatHeader(newProps)
    return true
  }

  private createDialogChatHeader(props: IState['chats']) {
    return new ChatHeader({
      imageUrl: props.selectedId
        ? props.list.data.find(item => item.id === props.selectedId)?.avatar
        : null,
      name: props.selectedId
        ? props.list.data.find(item => item.id === props.selectedId)?.title
        : null,
      chatId: props.selectedId,
      settings: {
        events: {
          click: () => {
            ModalsController.editChatsToggler(!this.props.show)
          }
        }
      }
    })
  }
  
  render() {
    return this.compile(template, { ...this.props })
  }
}

const withChat = withStore((state) => ({ ...state.chats, ...state.modals.editChats }))

export const DialogChats = withChat(DialogChatsArea)
