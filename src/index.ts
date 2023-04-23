import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import EditProfilePage from './pages/EditProfilePage/EditProfilePage'
import EditPasswordPage from './pages/EditPasswordPage/EditPasswordPage'
import ChatPage from './pages/ChatPage/ChatPage'
import NotFound from './pages/NotFound/NotFound'
import ErrorServ from './pages/ErrorServ/ErrorServ'
import './styles/styles.scss'

const root = document.querySelector('#root') as HTMLDivElement

switch (window.location.pathname) {
  case '/':
    const login = new LoginPage()
    root.append(login.getContent()!)
    login.dispatchComponentDidMount()

    break
  case '/signup':
    const signup = new SignupPage()
    root.append(signup.getContent()!)
    signup.dispatchComponentDidMount()

    break
  case '/chat':
    const chat = new ChatPage()
    root.append(chat.getContent()!)
    chat.dispatchComponentDidMount()

    break
  case '/profile-edit':
    const profileEdit = new EditProfilePage()
    root.append(profileEdit.getContent()!)
    profileEdit.dispatchComponentDidMount()

    break
  case '/profile':
    const profile = new ProfilePage()
    root.append(profile.getContent()!)
    profile.dispatchComponentDidMount()

    break
  case '/edit-pass':
    const editPass = new EditPasswordPage()
    root.append(editPass.getContent()!)
    editPass.dispatchComponentDidMount()

    break
  case '/500':
    root.innerHTML = ErrorServ()
    break

  default:
    root.innerHTML = NotFound()
    break
}
