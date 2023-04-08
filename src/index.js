import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import NotFound from './pages/NotFound/NotFound'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/EditProfile/EditProfile'
import Chat from './pages/Chat/Chat'
import EditPassword from './pages/EditPassword/EditPassword'
import './styles.scss'


const root = document.querySelector('#root')

root.innerHTML = Login()
console.log(window.location.pathname)

switch (window.location.pathname) {
  case '/':
    root.innerHTML = Login()
    break
  case '/signup':
    root.innerHTML = Signup()
    break
  case '/chat':
    root.innerHTML = Chat()
    break
  case '/profile-edit':
    root.innerHTML = EditProfile()
    break
  case '/profile':
    root.innerHTML = Profile()
    break
  case '/edit-pass':
    root.innerHTML = EditPassword()
    break

  default:
    root.innerHTML = NotFound()
    break
}