import Block from '../../packages/block/Block'
import template from './createChatBtn.hbs'

export interface ICreateChatBtnProps {
  isDel?: boolean
  events: {
    click: (e: Event) => void
  }
}

class CreateChatBtn extends Block<ICreateChatBtnProps> {
  constructor(props: ICreateChatBtnProps) {
    super(props)
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default CreateChatBtn
