import Block from '../../packages/block/Block'
import template from './deleteChatBtn.hbs'

export interface IDeleteChatBtnProps {
  isDel?: boolean
  events: {
    click: (e: Event) => void
  }
}

class DeleteChatBtn extends Block<IDeleteChatBtnProps> {
  constructor(props: IDeleteChatBtnProps) {
    super(props)
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default DeleteChatBtn
