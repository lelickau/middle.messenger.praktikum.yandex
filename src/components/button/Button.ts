import Block from '../../packages/block/Block'
import template from './button.hbs'

interface ButtonProps {
  type?: string
  label: string
  events: {
    click: (e: Event) => void
  }
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({ type: 'button', ...props })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default Button
