import Block from '../../packages/block/Block'
import template from './userList.hbs'

class UserList extends Block<any> {
  render() {
    return this.compile(template, this.props)
  }
}

export default UserList
