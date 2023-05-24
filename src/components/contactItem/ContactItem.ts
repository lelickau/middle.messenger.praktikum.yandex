import Block from '../../packages/block/Block'
import { TotalMessProps } from './totalMess/TotalMess'
import Avatar, { IAvatarProps } from './avatar/Avatar'
import template from './contactItem.hbs'

interface IButtonProps {
  activeClass: string
  avatar: IAvatarProps
  nameLetter?: string
  title: string
  time: string | null
  total?: TotalMessProps
  message: string
  events?: {
    click: () => void
  }
}

class ContactItem extends Block<IButtonProps> {
  constructor(props: IButtonProps) {
    super(props)
  }

  init() {
    this.children.avatar = new Avatar({
      ...this.props.avatar
    })
  }

  render() {
    return this.compile(template, {
      ...this.props
    })
  }
}

export default ContactItem
