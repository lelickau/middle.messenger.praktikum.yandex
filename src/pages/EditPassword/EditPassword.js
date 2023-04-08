import editPasswordTmp from './editPassword.hbs'
import img from '../../static/img/def-img.png'

const EditPassword = () => {
  const content = {
    img,
    btnText: 'Сохранить'
  }

  return editPasswordTmp(content)
}

export default EditPassword
