import Block from '../../packages/block/Block'
import template from './avatar.hbs'
import defImg from '../../static/img/def-img.png'

interface AvatarProps {
  src: string
  alt: string
}

class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props, defImg })
  }
}

export default Avatar
