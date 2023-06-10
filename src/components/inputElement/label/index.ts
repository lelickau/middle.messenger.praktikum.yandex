import Block from '../../../packages/block/Block'
import template from './label.hbs'
import Input, { IInputProps } from '../input'
import EyePass, { IEyePassProps } from '../eyePass'

interface LabelProps {
  input: IInputProps
  eye?: IEyePassProps | any
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
