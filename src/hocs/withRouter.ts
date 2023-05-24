import Block from '../packages/block/Block'
import Router from '../packages/router/Router'


export function withRouter(Component: typeof Block<any>) {

  return class WithRouter extends Component {
    constructor(props: any & PropsWithRouter) {
      super({ ...props, router: Router })
    }
  }
}

export interface PropsWithRouter {
  router: typeof Router
}
