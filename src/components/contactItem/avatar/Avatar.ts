import Block from '../../../packages/block/Block'
import template from './avatar.hbs'
import defAvatar from '../../../static/img/def-img.png'

export interface IAvatarProps {
  src: string
  defAvatar?: string
}

class Avatar extends Block<IAvatarProps> {
  constructor(props: IAvatarProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props, defAvatar })
  }
}

export default Avatar
