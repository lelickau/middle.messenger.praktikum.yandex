import Block from '../../packages/block/Block'
import template from './chatHeader.hbs'

interface ChatHeaderProps {
  imageUrl: string
  wordName: string
  name: string
}

class ChatHeader extends Block<ChatHeaderProps> {
  constructor(props: ChatHeaderProps) {
    super(props)
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default ChatHeader
