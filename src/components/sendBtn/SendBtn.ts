import Block from '../../packages/block/Block'
import template from './sendBtn.hbs'

export interface SendBtnProps {
  events: {
    click: (e: Event) => void
  }
}

class SendBtn extends Block<SendBtnProps> {
  constructor(props: SendBtnProps) {
    super(props)
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default SendBtn
