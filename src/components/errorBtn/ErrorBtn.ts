import Block from '../../packages/block/Block'
import template from './errorBtn.hbs'

interface IErrorBtnProps {
  label: string
  events: {
    click: () => void
  }
}

class ErrorBtn extends Block<IErrorBtnProps> {
  constructor(props: IErrorBtnProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default ErrorBtn
