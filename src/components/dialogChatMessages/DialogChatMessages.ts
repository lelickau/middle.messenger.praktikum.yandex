import { Message } from '../../controllers/MessagesController'
import { withStore } from '../../packages/store/Store'
import getTime from '../../helpers/getTime'
import Block from '../../packages/block/Block'
import MyMessage from '../message/Message'
import template from './dialogChatMessages.hbs'


type InterfacePropsWithStore = { messages: Message[], userId: number, selectedChatId: number }

class ChatMessages extends Block {
  init() {
    this.children.messages = this.createMessages(this.props)
  }

  componentDidUpdate(_: any, newProps: any) {
    this.children.messages = this.createMessages(newProps)
    return true
  }

  private createMessages(props: InterfacePropsWithStore) {
    return props.messages.map((item) => new MyMessage({
      text: item.content,
      time: getTime(item.time),
      status: '',
      className: item.user_id === props.userId ? 'message-my' : 'message-opp'
    }))
  }

  render() {
    return this.compile(template, this.props)
  }
}

const withChat = withStore((state) => {
  const selectedChatId = state.chats.selectedId

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChatId: undefined,
      userId: state.user.data?.id
    }
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChatId,
    userId: state.user.data?.id
  }
})

export const DialogChatMessages = withChat(ChatMessages)
