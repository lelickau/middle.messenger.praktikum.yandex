import { withStore } from '../../packages/store/Store'
import { ComeBack } from '../../components/comeBack/ComeBack'
import { NavLink } from '../../components/navLink/NavLink'
import Block from '../../packages/block/Block'
import Avatar from '../../components/avatar/Avatar'
import ProfileElement from '../../components/profileElement/ProfileElement'
import ErrorBtn from '../../components/errorBtn/ErrorBtn'
import AuthController from '../../controllers/AuthController'
import template from './profile.hbs'

const dataInfo = [
  { title: 'Почта', value: 'email' },
  { title: 'Логин', value: 'login' },
  { title: 'Имя', value: 'first_name' },
  { title: 'Фамилия', value: 'second_name' },
  { title: 'Имя в чате', value: 'display_name' },
  { title: 'Телефон', value: 'phone' }
]

class Profile extends Block<Record<string, any>> {

  init() {
    this.children.comeBack = new ComeBack({
      to: '/messenger',
      events: { click: () => {} }
    })

    this.children.avatar = new Avatar({
      src: this.props.data?.avatar || '',
      alt: 'Аватар не загрузился'
    })

    this.children.info = dataInfo.map((info) => {
      return new ProfileElement({
        title: info.title, value: this.props?.data[info.value]
      })
    })

    this.children.editProfile = new NavLink({
      to: '/settings-edit',
      linkText: 'Изменить данные',
      events: {
        click: () => {}
      }
    })

    this.children.EditPassword = new NavLink({
      to: '/settings-reset',
      linkText: 'Изменить пароль',
      events: {
        click: () => {}
      }
    })

    this.children.logout = new ErrorBtn({
      label: 'Выйти',
      events: {
        click: () => {
          AuthController.logout()
        }
      }
    })

  }

  render() {
    return this.compile(template, {
      ...this.props
    })
  }
}

const withUser = withStore((state) => {
  return { ...state.user }
})

export const ProfilePage = withUser(Profile)
