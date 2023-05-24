import { PropsWithRouter, withRouter } from '../../hocs/withRouter'
import Block from '../../packages/block/Block'
import template from './navLink.hbs'

interface NavLinkProps extends PropsWithRouter {
  to: string
  linkText: string
  events: {
    click: () => void
  }
}

class Link extends Block<NavLinkProps> {
  constructor(props: NavLinkProps) {
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

export const NavLink = withRouter(Link)
