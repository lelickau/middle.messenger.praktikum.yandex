import Block from '../../../packages/block/Block'
import template from './sendStatus.hbs'

export interface SendStatusProps {}

class SendStatus extends Block<SendStatusProps> {
  constructor(props: SendStatusProps) {
    super(props)
  }

  render() {
    return this.compile(template, {
      ...this.props
    })
  }
}

export default SendStatus
