import Block from '../../packages/block/Block'
import template from './errorBtn.hbs'

interface ErrorBtnProps {
  label: string
  events: {
    click: () => void
  }
}

class ErrorBtn extends Block<ErrorBtnProps> {
  constructor(props: ErrorBtnProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default ErrorBtn
