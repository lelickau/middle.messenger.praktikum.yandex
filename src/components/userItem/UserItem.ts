import Block from '../../packages/block/Block'
import template from './userItem.hbs'

interface IUserItemProps {
  text: string
  events: {
    click: () => void
  }
  selected?: boolean
}

class UserItem extends Block<IUserItemProps> {
  render() {
    return this.compile(template, this.props)
  }
}

export default UserItem
