import Block from '../../../packages/block/Block'
import template from './inputUpload.hbs'

export interface InputUploadProps {
  events: {
    input: (e: Event) => void
  }
}

class InputUpload extends Block<InputUploadProps> {
  constructor(props: InputUploadProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default InputUpload
