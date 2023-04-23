import Block from '../../packages/block/Block'
import template from './comeBack.hbs'

interface ComeBackProps {
  to: string
  events: {
    click: () => void
  }
}

class ComeBack extends Block<ComeBackProps> {
  constructor(props: ComeBackProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default ComeBack
