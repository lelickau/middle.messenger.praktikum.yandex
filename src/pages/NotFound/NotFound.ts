import { NavLink } from '../../components/navLink/NavLink'
import Block from '../../packages/block/Block'
import template from './notFound.hbs'

class NotFound extends Block {
  constructor() {
    super({
      code: '404',
      text: 'Не туда попали'
    })
  }

  init() {
    this.children.link = new NavLink({
      to: '/messenger',
      linkText: 'Назад к чатам'
    })
  }

  render() {
    return this.compile(template, {
      ...this.props
    })
  }

}

export default NotFound
