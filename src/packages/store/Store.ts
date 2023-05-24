
import { EventBus } from '../eventBus/EventBus'
import Block from '../block/Block'
import { set } from '../set/set'
import { IUser } from '../../types/IUser'
import { IChat } from '../../types/IChat'
import { IMessage } from '../../types/IMessage'

export interface IState {
  chats: {
    users?: IUser[]
    selectedId?: number
    list: {
      data: IChat[]
      isLoading: boolean
    }
  },
  user: {
    data?: IUser,
    error?: string,
    isLoading: boolean
  },
  messages: Array<IMessage[]>,
  modals: {
    addUser: {
      show: boolean;
      isLoading: boolean;
      error?: string;
    },
    deleteUser: {
      show: boolean;
      isLoading: boolean;
      selectedUserId?: number;
      error?: string;
    },
    createChat: {
      show: boolean;
      isLoading: boolean;
    },
    editChats: {
      show: boolean;
    },
    file: {
      show: boolean;
      text: string,
      file?: File;
    }
  }
}

export class Store extends EventBus {
  static EVENTS = {
    UPDATED: 'updated'
  } as const

  private state: IState = {
    chats: {
      list: {
        data: [],
        isLoading: false
      }
    },
    user: {
      isLoading: false
    },
    messages: [],
    modals: {
      addUser: {
        show: false,
        isLoading: false
      },
      deleteUser: {
        show: false,
        isLoading: false
      },
      createChat: {
        show: false,
        isLoading: false
      },
      editChats: {
        show: false
      },
      file: {
        show: false,
        text: 'Choose file on your pc'
      }
    }
  } as IState

  public set(path: string, data: unknown) {
    set(this.state, path, data)

    this.emit(Store.EVENTS.UPDATED, this.getState())
  }

  public getState(): IState {
    return this.state
  }
}

const store = new Store()

export function withStore<SP>(mapStateToProps: (state: IState) => any) {
  return function wrap<P>(Component: typeof Block){
    let previousState: any

    return class WithStore extends Component {

      constructor(props: Omit<P, keyof SP>) {
        previousState = mapStateToProps(store.getState())

        super({ ...(props as P), ...previousState })

        store.on(Store.EVENTS.UPDATED, (newState) => {
          const stateProps = mapStateToProps(newState)

          this.setProps({ ...stateProps })
        })

      }

    }

  }
}

export default store
