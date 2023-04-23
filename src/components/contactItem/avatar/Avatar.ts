import Block from '../../../packages/block/Block'
import template from './avatar.hbs'

export interface AvatarProps {
  src: string
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
