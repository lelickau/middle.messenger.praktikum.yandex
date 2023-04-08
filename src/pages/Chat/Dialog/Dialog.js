import dialogTmp from './dialog.hbs'
import send from './send.hbs'
import img from '../../../static/img/avatar.png'

import './dialog.modules.scss'

const Dialog = () => {
    const content = {
        imageUrl: img,
        wordName: 'в',
        name: 'Вадим',
        send: send({})
    }
  
    return dialogTmp(content)
}
  
export default Dialog
