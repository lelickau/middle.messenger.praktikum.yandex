import profileTmp from './profile.hbs'
import img from '../../static/img/def-img.png'
import Block from '../../packages/block/Block'
import ComeBack from '../../components/comeBack/ComeBack'
import Avatar from '../../components/avatar/Avatar'
import ProfileElement from '../../components/profileElement/ProfileElement'
import NavLink from '../../components/navLink/NavLink'
import ErrorBtn from '../../components/errorBtn/ErrorBtn'

class ProfilePage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.comeBack = new ComeBack({
      to: '/chat',
      events: { click: () => {} }
    })

    this.children.avatar = new Avatar({
      src: img,
      alt: 'Аватар не загрузился'
    })

    this.children.avatar = new Avatar({
      src: img,
      alt: 'Аватар не загрузился'
    })

    this.children.mail = new ProfileElement({
      title: 'Почта',
      value: 'pochta@yandex.ru'
    })

    this.children.login = new ProfileElement({
      title: 'Логин',
      value: 'ivanivanov'
    })

    this.children.name = new ProfileElement({
      title: 'Имя',
      value: 'Иван'
    })

    this.children.lastName = new ProfileElement({
      title: 'Фамилия',
      value: 'Иванов'
    })

    this.children.chatName = new ProfileElement({
      title: 'Имя в чате',
      value: 'ИванXX'
    })

    this.children.tel = new ProfileElement({
      title: 'Телефон',
      value: '+7 (909) 967 30 30'
    })

    this.children.editProfile = new NavLink({
      to: '/profile-edit',
      linkText: 'Изменить данные',
      events: {
        click: () => {}
      }
    })

    this.children.EditPassword = new NavLink({
      to: '/edit-pass',
      linkText: 'Изменить пароль',
      events: {
        click: () => {}
      }
    })

    this.children.logout = new ErrorBtn({
      label: 'Выйти',
      events: {
        click: () => {}
      }
    })
  }

  render() {
    return this.compile(profileTmp, {
      ...this.props,
      title: 'Иван'
    })
  }
}

export default ProfilePage
