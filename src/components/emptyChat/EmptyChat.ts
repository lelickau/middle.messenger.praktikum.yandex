import Block from '../../packages/block/Block'
import template from './emptyChat.hbs'

interface EmptyChatProps {
  text: string
}

class EmptyChat extends Block<EmptyChatProps> {
  constructor(props: EmptyChatProps) {
    super(props)
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default EmptyChat
