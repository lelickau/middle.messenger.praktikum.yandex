import { NavLink } from '../../components/navLink/NavLink'
import { SigninData } from '../../api/AuthAPI'
import Block from '../../packages/block/Block'
import checkInputValidation from '../../helpers/checkInputValidation'
import setDisableBtn from '../../helpers/setDisableBtn'
import showPassword from '../../helpers/showPassword'
import Button from '../../components/button/Button'
import Label from '../../components/inputElement/label/Label'
import AuthController from '../../controllers/AuthController'
import template from './login.hbs'

class LoginPage extends Block {
  constructor() {
    super({})
  }

  valid = {
    login: false,
    password: false
  }

  init() {
    this.children.labelLogin = new Label({
      id: 'login',
      label: 'Логин',
      error: 'Минимум 3 латинских символа',
      input: {
        name: 'login',
        id: 'login',
        label: 'Логин',
        type: 'text',
        events: {
          input: (e) => {
            e.preventDefault()
            checkInputValidation(e, 'text', this.valid)
            setDisableBtn('button', this.valid)
          },
          blur: (e) => {
            checkInputValidation(e, 'text', this.valid)
            setDisableBtn('button', this.valid)
          },
          focus: (e) => {
            checkInputValidation(e, 'text', this.valid)
            setDisableBtn('button', this.valid)
          }
        }
      }
    })

    this.children.labelPassword = new Label({
      id: 'password',
      label: 'Пароль',
      error: 'Минимум 8 символов, 1 заглавная буква и цифра',
      eye: {
        class: true,
        events: {
          click: (e: Event) => {
            showPassword(e)
          }
        }
      },
      input: {
        name: 'password',
        id: 'password',
        label: 'Пароль',
        type: 'password',
        events: {
          input: (e) => {
            e.preventDefault()
            checkInputValidation(e, 'password', this.valid)
            setDisableBtn('button', this.valid)
          },
          blur: (e) => {
            checkInputValidation(e, 'password', this.valid)
            setDisableBtn('button', this.valid)
          },
          focus: (e) => {
            checkInputValidation(e, 'password', this.valid)
            setDisableBtn('button', this.valid)
          }
        }
      }
    })

    this.children.button = new Button({
      label: 'Войти',
      events: {
        click: (e) => {
          e.preventDefault()
          const target = e.target as HTMLInputElement
          const parent = target.closest('.auth__form') as HTMLFormElement
          const inputs = parent.querySelectorAll('.input__input')
          let formValues: any = {}
          inputs.forEach((input: any) => {
            formValues = { ...formValues, [input.name]: input.value }
          })
          this.onSubmit(formValues)
        }
      }
    })

    this.children.navLink = new NavLink({
      to: '/sign-up',
      linkText: 'Нет аккаунта?',
      events: { click: () => {}}
    })
  }

  onSubmit(data: SigninData) {
    AuthController.signin(data as SigninData)
  }

  render() {
    return this.compile(template, {
      ...this.props,
      title: 'Вход'
    })
  }
}

export default LoginPage
