import Block from '../../packages/block/Block'
import template from './sendInput.hbs'

export interface SendInputProps {
  label: string
  name: string
  events: {
    input: (e: Event) => void
    blur: (e: Event) => void
    focus: (e: Event) => void
  }
}

class SendInput extends Block<SendInputProps> {
  constructor(props: SendInputProps) {
    super(props)
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default SendInput
