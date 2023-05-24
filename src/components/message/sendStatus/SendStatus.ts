import Block from '../../../packages/block/Block'
import template from './sendStatus.hbs'

export interface ISendStatusProps {}

class SendStatus extends Block<ISendStatusProps> {
  constructor(props: ISendStatusProps) {
    super(props)
  }

  render() {
    return this.compile(template, {
      ...this.props
    })
  }
}

export default SendStatus
