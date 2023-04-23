import Block from '../../packages/block/Block'
import template from './sendFile.hbs'

interface SendFileProps {}

class SendFile extends Block<SendFileProps> {
  constructor(props: SendFileProps) {
    super(props)
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default SendFile
