import chatTmp from './chat.hbs'
import './chat.modules.scss'
import search from './search.hbs'
import img from '../../static/img/avatar.png'

const Chat = () => {
  const content = {
    imageUrl: img,
    wordName: 'в',
    name: 'Вадим',
    search: search({})
  }

  return chatTmp(content)
}

export default Chat