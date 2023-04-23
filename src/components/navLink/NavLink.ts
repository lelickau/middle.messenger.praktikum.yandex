import Block from '../../packages/block/Block'
import template from './navLink.hbs'

interface NavLinkProps {
  to: string
  linkText: string
  events: {
    click: () => void
  }
}

export class NavLink extends Block<NavLinkProps> {
  constructor(props: NavLinkProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default NavLink
