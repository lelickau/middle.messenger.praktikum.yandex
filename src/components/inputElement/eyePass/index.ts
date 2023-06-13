import Block from '../../../packages/block/Block'
import template from './eyePass.hbs'

export interface IEyePassProps {
  class: string
  events: {
    click: (e: Event) => void
  }
}

class EyePass extends Block<IEyePassProps> {
  constructor(props: IEyePassProps) {
    super(props)
  }

  render() {
    return this.compile(template, {
      ...this.props, class: this.props.class || 'hidden'
    })
  }
}

export default EyePass
