import chatTmp from './chat.hbs'
import Sidebar from './Sidebar/Sidebar'
import Dialog from './Dialog/Dialog'
import img from '../../static/img/avatar.png'

import './chat.modules.scss'

const Chat = () => {
  const content = {
    imageUrl: img,
    sidebar: Sidebar(),
    dialog: Dialog(),
  }

  return chatTmp(content)
}

export default Chat
