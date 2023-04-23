import Block from '../../../packages/block/Block'
import template from './totalMess.hbs'

export interface TotalMessProps {
  count: string
  events: {
    click: () => void
  }
}

class TotalMess extends Block<TotalMessProps> {
  constructor(props: TotalMessProps) {
    super(props)
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export default TotalMess
