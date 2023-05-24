import Block from '../../packages/block/Block'
import template from './sendBtn.hbs'

export interface SendBtnProps {}

class SendBtn extends Block<SendBtnProps> {
  constructor(props: SendBtnProps) {
    super(props)
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default SendBtn
