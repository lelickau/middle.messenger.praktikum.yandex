import { PropsWithRouter, withRouter } from '../../hocs/withRouter'
import Block from '../../packages/block/Block'
import template from './comeBack.hbs'

interface ComeBackProps extends PropsWithRouter {
  to: string
  events: {
    click: () => void
  }
}

class NavComeBack extends Block<ComeBackProps> {
  constructor(props: ComeBackProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      }
    })
  }

  navigate() {
    this.props.router.go(this.props.to)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export const ComeBack = withRouter(NavComeBack)
