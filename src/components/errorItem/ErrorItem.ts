import Block from '../../packages/block/Block'
import template from './errorItem.hbs'

interface IErrorProps {
  text: string
}

class ErrorItem extends Block {
  constructor(props: IErrorProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default ErrorItem
