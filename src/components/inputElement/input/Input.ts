import Block from '../../../packages/block/Block'
import template from './input.hbs'

export interface InputProps {
  type: string
  name: string
  id: string
  label: string
  events: {
    input: (e: Event) => void
    blur: (e: Event) => void
    focus: (e: Event) => void
  }
}

class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default Input
