import Block from '../../../packages/block/Block'
import template from './input.hbs'

export interface IInputProps {
  type: string
  name: string
  id: string
  label: string
  value?: string
  events: {
    input: (e: Event) => void
    blur: (e: Event) => void
    focus: (e: Event) => void
  }
}

class Input extends Block<IInputProps> {
  constructor(props: IInputProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default Input
