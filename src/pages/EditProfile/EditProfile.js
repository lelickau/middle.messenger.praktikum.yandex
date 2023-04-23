import editProfileTmp from './editProfile.hbs'
import img from '../../static/img/def-img.png'

const EditProfile = () => {
  const content = {
    img,
    btnText: 'Сохранить'
  }

  return editProfileTmp(content)
}

export default EditProfile
