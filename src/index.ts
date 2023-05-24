import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { EditProfilePage } from './pages/EditProfilePage/EditProfilePage'
import EditPasswordPage from './pages/EditPasswordPage/EditPasswordPage'
import ChatPage from './pages/ChatPage/ChatPage'
import NotFound from './pages/NotFound/NotFound'
import './styles/styles.scss'
import Router from './packages/router/Router'
import AuthController from './controllers/AuthController'

export const Routes = {
  Auth: '/',
  SignUp: '/sign-up',
  Settings: '/settings',
  SettingsReset: '/settings-reset',
  SettingsEdit: '/settings-edit',
  Messenger: '/messenger',
  PageNotFound: '/404'
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Auth, LoginPage)
    .use(Routes.SignUp, SignupPage)
    .use(Routes.Settings, ProfilePage)
    .use(Routes.SettingsEdit, EditProfilePage)
    .use(Routes.SettingsReset, EditPasswordPage)
    .use(Routes.Messenger, ChatPage)
    .use(Routes.PageNotFound, NotFound)

  let isProtectedRoute = true

  switch (window.location.pathname) {
    case Routes.Auth:
    case Routes.SignUp:
      isProtectedRoute = false
      break
    default:
      if (!Object.values(Routes).includes(window.location.pathname)) {
        Router.go(Routes.PageNotFound)
      }
      break
  }

  try {
    await AuthController.fetchUser()

    Router.start()

    if (!isProtectedRoute) {
      Router.go(Routes.Messenger)
    }
  } catch (e) {
    Router.start()

    if (isProtectedRoute) {
      Router.go(Routes.Auth)
    }
  }

})
