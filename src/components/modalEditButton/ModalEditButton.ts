import Block from '../../packages/block/Block'
import template from './modalEditButton.hbs'

interface IModalEditButtonProps {
  title: string
  events: {
    click: (e: Event) => void
  }
}

class ModalEditButton extends Block<IModalEditButtonProps> {
  render() {
    return this.compile(template, this.props)
  }
}

export default ModalEditButton
