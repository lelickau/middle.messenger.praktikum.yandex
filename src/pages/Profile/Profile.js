import profileTmp from './profile.hbs'
import './profile.modules.scss'
import img from '../../static/img/def-img.png'

const Profile = () => {
  const content = {
    img,
    name: 'Иван'
  }

  return profileTmp(content)
}

export default Profile
