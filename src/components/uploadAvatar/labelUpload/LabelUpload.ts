import Block from '../../../packages/block/Block'
import InputUpload, { InputUploadProps } from '../inputUpload/InputUpload'
import template from './labelUpload.hbs'

interface LabelUploadProps {
  input: InputUploadProps
  img: string
}


class LabelUpload extends Block<LabelUploadProps> {
  constructor(props: LabelUploadProps) {
    super(props)
  }

  init() {
    this.children.inputUpload = new InputUpload({
      ...this.props.input
    })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default LabelUpload
