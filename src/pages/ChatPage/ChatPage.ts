import Block from '../../packages/block/Block'
import LabelSearch from '../../components/search/labelSearch/LabelSearch'
import SettingsBtn from '../../components/settingsBtn/SettingsBtn'
import ContactItem from '../../components/contactItem/ContactItem'
import SendFile from '../../components/sendFile/SendFile'
import ChatHeader from '../../components/chatHeader/ChatHeader'
import chatTmp from './chat.hbs'
import img from '../../static/img/avatar.png'
import Send from '../../components/send/Send'
import MyMessage from '../../components/message/Message'

const dataMock = [
  {
    nameLetter: 'в',
    contactName: 'Вадим',
    time: '10:49',
    lastMess: 'Lorem ipsum',
    activeClass: '',
    total: { count: 1 },
    avatar: { src: img }
  },
  {
    nameLetter: 'м',
    contactName: 'Мери',
    time: '01.12.22',
    lastMess: 'Voluptatem, nemo!',
    activeClass: '',
    total: { count: 6 },
    avatar: { src: img }
  },
  {
    nameLetter: 'м',
    contactName: 'Маркус',
    time: '10.02.23',
    lastMess: 'Круто!',
    activeClass: 'contact--active',
    total: { count: 44 },
    avatar: { src: img }
  }
]

class ChatPage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.search = new LabelSearch({
      input: {
        label: 'Поиск',
        events: {
          input: (e) => {
            e.preventDefault()
            const target = e.target as HTMLInputElement
            console.log(target.value)
          },
          blur: () => {
            console.log('blur')
          },
          focus: () => {
            console.log('focus')
          }
        }
      }
    })

    this.children.settingsBtn = new SettingsBtn({
      to: '/profile',
      title: 'Профиль',
      events: {
        click: () => {}
      }
    })

    this.children.sendFile = new SendFile({
      events: {}
    })
    this.children.send = new Send({
      sendInput: {
        label: 'Сообщение',
        name: 'message',
        events: {
          input: (e) => {
            const target = e.target as HTMLInputElement
            console.log(target.value)
          },
          blur: () => { console.log('blur') },
          focus: () => { console.log('focus') }
        }
      },
      sendBtn: {
        events: {
          click: () => console.log('send click')
        }
      },
      events: {
        click: () => {}
      }
    })

    this.children.myMessage = new MyMessage({
      text: 'Далеко-далеко за словесными горами в стране гласных',
      time: '12:30',
      status: '',
      className: 'message-my'
    })

    this.children.myMessage2 = new MyMessage({
      text: 'Далеко-далеко за словесными горами в стране гласных',
      time: '12:30',
      status: '',
      className: 'message-opp'
    })

    this.children.header = new ChatHeader({
      imageUrl: img,
      name: 'Вадим',
      wordName: 'В'
    })

    this.children.nodesData = dataMock.map((props: any, idx) => {
      return this.children[`contact${idx}`] = new ContactItem({ ...props })
    })

  }

  render() {
    return this.compile(chatTmp, {
      ...this.props
    })
  }
}

export default ChatPage
