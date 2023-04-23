import Block from '../../../packages/block/Block'
import template from './inputSearch.hbs'

export interface InputSearchProps {
  label: string
  events: {
    input: (e: Event) => void
    blur: (e: Event) => void
    focus: (e: Event) => void
  }
}

class InputSearch extends Block<InputSearchProps> {
  constructor(props: InputSearchProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default InputSearch
