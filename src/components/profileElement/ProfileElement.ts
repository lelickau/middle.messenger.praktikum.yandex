import Block from '../../packages/block/Block'
import template from './profileElement.hbs'

interface ErrorBtnProps {
  title: string
  value: any
}

export class ProfileElement extends Block<ErrorBtnProps> {
  constructor(props: ErrorBtnProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default ProfileElement
