import Block from '../../packages/block/Block'
import { TotalMessProps } from './totalMess/TotalMess'
import defAvatar from '../../static/img/def-img.png'
import template from './contactItem.hbs'

interface IButtonProps {
  activeClass: string
  avatar: string
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

  render() {
    return this.compile(template, {
      ...this.props, defAvatar
    })
  }
}

export default ContactItem
