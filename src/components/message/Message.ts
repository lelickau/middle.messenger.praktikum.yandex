import Block from '../../packages/block/Block'
import SendStatus, { ISendStatusProps } from './sendStatus/SendStatus'
import template from './message.hbs'

interface IMyMessageProps {
  status: ISendStatusProps
  text: string
  className: string
  time: string
}

class MyMessage extends Block<IMyMessageProps> {
  constructor(props: IMyMessageProps) {
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
