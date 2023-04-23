import Block from '../../packages/block/Block'
import TotalMess, { TotalMessProps } from './totalMess/TotalMess'
import Avatar, { AvatarProps } from './avatar/Avatar'
import template from './contactItem.hbs'

interface ButtonProps {
  activeClass: string
  avatar: AvatarProps
  nameLetter: string
  contactName: string
  time: string
  total: TotalMessProps
  lastMess: string
  events: {
    click: () => void
  }
}

class ContactItem extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props)
  }

  init() {
    this.children.totalMass = new TotalMess({
      ...this.props.total
    })

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
