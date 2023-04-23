import Block from '../../packages/block/Block'
import SendBtn, { SendBtnProps } from '../sendBtn/SendBtn'
import SendInput, { SendInputProps } from '../sendInput/SendInput'
import template from './send.hbs'

interface SendProps {
  sendInput: SendInputProps
  sendBtn: SendBtnProps
  events: {
    click: (e: Event) => void
  }
}


class Send extends Block<SendProps> {
  constructor(props: SendProps) {
    super(props)
  }

  init() {
    this.children.sendBtn = new SendBtn({
      ...this.props.sendBtn
    })
    this.children.sendInput = new SendInput({
      ...this.props.sendInput
    })
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default Send
