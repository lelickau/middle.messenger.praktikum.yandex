import Block from '../../packages/block/Block'
import SendStatus, { SendStatusProps } from './sendStatus/SendStatus'
import template from './message.hbs'

interface MyMessageProps {
  status: SendStatusProps
  text: string
  className: string
  time: string
}

class MyMessage extends Block<MyMessageProps> {
  constructor(props: MyMessageProps) {
    super(props)
  }

  init() {
    this.children.status = new SendStatus({
      ...this.props.status
    })
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default MyMessage
