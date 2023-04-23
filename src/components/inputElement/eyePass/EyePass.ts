import Block from '../../../packages/block/Block'
import template from './eyePass.hbs'

export interface EyePassProps {
  class: string
  events: {
    click: (e: Event) => void
  }
}

class EyePass extends Block<EyePassProps> {
  constructor(props: EyePassProps) {
    super(props)
  }

  render() {
    return this.compile(template, {
      ...this.props, class: this.props.class || 'hidden'
    })
  }
}

export default EyePass
