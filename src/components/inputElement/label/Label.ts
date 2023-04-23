import Block from '../../../packages/block/Block'
import template from './label.hbs'
import Input, { InputProps } from '../input/Input'
import EyePass, { EyePassProps } from '../eyePass/EyePass'

interface LabelProps {
  input: InputProps
  eye?: EyePassProps | any
  error: string
  id: string
  label: string
}

class Label extends Block<LabelProps> {
  constructor(props: LabelProps) {
    super(props)
  }

  init() {
    this.children.input = new Input({
      ...this.props.input
    })

    this.children.eyePass = new EyePass({
      ...this.props.eye
    })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default Label
