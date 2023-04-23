import Block from '../../packages/block/Block'
import template from './avatar.hbs'

interface AvatarProps {
  src: string
  alt: string
}

class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default Avatar
