import Block from '../../packages/block/Block'
import ChatSettings, { ChatSettingsProps } from '../chatSettings/ChatSettings'
import template from './chatHeader.hbs'
import img from '../../static/img/def-img.png'

interface ChatHeaderProps {
  imageUrl: any
  wordName?: string
  name: any
  settings: ChatSettingsProps
}

class ChatHeader extends Block<ChatHeaderProps> {
  constructor(props: ChatHeaderProps) {
    super(props)
  }

  init() {
    this.children.settings = new ChatSettings({
      ...this.props.settings
    })
  }

  render() {
    return this.compile(template, { ...this.props, img })
  }
}

export default ChatHeader
