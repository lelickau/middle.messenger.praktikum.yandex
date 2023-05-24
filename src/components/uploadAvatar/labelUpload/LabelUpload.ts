import Block from '../../../packages/block/Block'
import InputUpload, { InputUploadProps } from '../inputUpload/InputUpload'
import template from './labelUpload.hbs'
import defImg from '../../../static/img/def-img.png'

interface LabelUploadProps {
  input: InputUploadProps
  img: string
}


class LabelUpload extends Block<LabelUploadProps> {
  init() {
    this.children.inputUpload = new InputUpload({
      ...this.props.input
    })
  }

  render() {
    return this.compile(template, { ...this.props, defImg })
  }
}

export default LabelUpload
