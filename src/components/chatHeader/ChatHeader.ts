import Block from '../../packages/block/Block'
import ChatSettings, { ChatSettingsProps } from '../chatSettings/ChatSettings'
import template from './chatHeader.hbs'
import img from '../../static/img/def-img.png'
import DeleteChatBtn from '../deleteChatBtn/DeleteChatBtn'
import ChatsController from '../../controllers/ChatsController'

interface ChatHeaderProps {
  imageUrl: any
  wordName?: string
  name: any
  settings: ChatSettingsProps
  chatId: number | undefined
}

class ChatHeader extends Block<ChatHeaderProps> {
  constructor(props: ChatHeaderProps) {
    super(props)
  }

  init() {
    this.children.deleteChat = new DeleteChatBtn({
      events: {
        click: async () => {
          if (this.props.chatId) {
            console.log(this.props)
            await ChatsController.deleteChat(this.props.chatId)
            await ChatsController.getChats()
            ChatsController.selectChat(null)
          }
        }
      }
    })

    this.children.settings = new ChatSettings({
      ...this.props.settings
    })
  }

  render() {
    return this.compile(template, { ...this.props, img })
  }
}

export default ChatHeader
