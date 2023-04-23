import Block from '../../../packages/block/Block'
import InputSearch, { InputSearchProps } from '../inputSearch/InputSearch'
import template from './labelSearch.hbs'

interface LabelSearchProps {
  input: InputSearchProps
}

class LabelSearch extends Block<LabelSearchProps> {
  constructor(props: LabelSearchProps) {
    super(props)
  }

  init() {
    this.children.input = new InputSearch({
      ...this.props.input
    })
  }
  
  render() {
    return this.compile(template, { ...this.props })
  }
}

export default LabelSearch
