import Block from '../../packages/block/Block'
import template from './modalEditCloseButton.hbs'

interface IModalEditCloseButtonProps {
  events: {
    click: (e: Event) => void
  }
}

class ModalEditCloseButton extends Block<IModalEditCloseButtonProps> {
  render() {
    return this.compile(template, this.props)
  }
}

export default ModalEditCloseButton
