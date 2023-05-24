import Block from '../../packages/block/Block'
import { ModalSettingsChat } from '../modalSettingsChat/ModalSettingsChat'
import template from './chatSettings.hbs'

export interface ChatSettingsProps {
  events: {
    click: (e: Event) => void
  }
}

class ChatSettings extends Block<ChatSettingsProps> {
  constructor(props: ChatSettingsProps) {
    super(props)
  }

  init() {
    this.children.modalEdit = new ModalSettingsChat({})
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default ChatSettings
