import { SignupData } from '../../api/AuthAPI'
import { NavLink } from '../../components/navLink/NavLink'
import Block from '../../packages/block/Block'
import AuthController from '../../controllers/AuthController'
import Button from '../../components/button/Button'
import Label from '../../components/inputElement/label/Label'
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter'
import checkInputValidation from '../../helpers/checkInputValidation'
import checkRepPass from '../../helpers/checkRepPass'
import setDisableBtn from '../../helpers/setDisableBtn'
import showPassword from '../../helpers/showPassword'
import template from './signup.hbs'

class SignupPage extends Block {
  constructor() {
    super({})
  }

  valid = {
    login: false,
    first_name: false,
    second_name: false,
    email: false,
    phone: false,
    password: false,
    repeatPassword: false
  }
  pass = ''
  repPass = ''

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

    this.children.labelName = new Label({
      id: 'first_name',
      label: 'Имя',
      error: 'Имя не должно содержать пробелы или цифры',
      input: {
        name: 'first_name',
        id: 'first_name',
        label: 'Имя',
        type: 'text',
        events: {
          input: (e) => {
            e.preventDefault()
            const target = e.target as HTMLInputElement
            checkInputValidation(e, 'word', this.valid)
            setDisableBtn('button', this.valid)
            target.value = capitalizeFirstLetter(target.value)
          },
          blur: (e) => {
            checkInputValidation(e, 'word', this.valid)
            setDisableBtn('button', this.valid)
          },
          focus: (e) => {
            checkInputValidation(e, 'word', this.valid)
            setDisableBtn('button', this.valid)
          }
        }
      }
    })

    this.children.labelSecondName = new Label({
      id: 'second_name',
      label: 'Фамилия',
      error: 'Фамилия не должна содержать пробелы или цифры',
      input: {
        name: 'second_name',
        id: 'second_name',
        label: 'Фамилия',
        type: 'text',
        events: {
          input: (e) => {
            e.preventDefault()
            const target = e.target as HTMLInputElement
            checkInputValidation(e, 'word', this.valid)
            setDisableBtn('button', this.valid)
            target.value = capitalizeFirstLetter(target.value)
          },
          blur: (e) => {
            checkInputValidation(e, 'word', this.valid)
            setDisableBtn('button', this.valid)
          },
          focus: (e) => {
            checkInputValidation(e, 'word', this.valid)
            setDisableBtn('button', this.valid)
          }
        }
      }
    })

    this.children.labelEmail = new Label({
      id: 'email',
      label: 'Почта',
      error: 'Почта не корректная',
      input: {
        name: 'email',
        id: 'email',
        label: 'Почта',
        type: 'email',
        events: {
          input: (e) => {
            e.preventDefault()
            checkInputValidation(e, 'email', this.valid)
            setDisableBtn('button', this.valid)
          },
          blur: (e) => {
            checkInputValidation(e, 'email', this.valid)
            setDisableBtn('button', this.valid)
          },
          focus: (e) => {
            checkInputValidation(e, 'email', this.valid)
            setDisableBtn('button', this.valid)
          }
        }
      }
    })

    this.children.labelTel = new Label({
      id: 'phone',
      label: 'Телефон',
      error: 'Номер телефона не корректный',
      input: {
        name: 'phone',
        id: 'phone',
        label: 'Телефон',
        type: 'text',
        events: {
          input: (e) => {
            e.preventDefault()
            checkInputValidation(e, 'phone', this.valid)
            setDisableBtn('button', this.valid)
          },
          blur: (e) => {
            checkInputValidation(e, 'phone', this.valid)
            setDisableBtn('button', this.valid)
          },
          focus: (e) => {
            checkInputValidation(e, 'phone', this.valid)
            setDisableBtn('button', this.valid)
          }
        }
      }
    })

    this.children.labelPass = new Label({
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
            const target = e.target as HTMLInputElement
            checkInputValidation(e, 'password', this.valid)
            setDisableBtn('button', this.valid)
            this.pass = target.value
            if ((target.value !== this.repPass) && this.repPass) {
              this.valid.repeatPassword = false
            } else {
              this.valid.repeatPassword = true
            }
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

    this.children.labelPassRep = new Label({
      id: 'repeatPassword',
      label: 'Пароль (еще раз)',
      error: 'Пароли не совпадают',
      eye: {
        class: true,
        events: {
          click: (e: Event) => {
            showPassword(e)
          }
        }
      },
      input: {
        name: 'repeatPassword',
        id: 'repeatPassword',
        label: 'Пароль (еще раз)',
        type: 'password',
        events: {
          input: (e) => {
            e.preventDefault()
            const target = e.target as HTMLInputElement
            if (this.pass === target.value) {
              this.valid.repeatPassword = true
              setDisableBtn('button', this.valid)
            } else {
              this.valid.repeatPassword = false
              setDisableBtn('button', this.valid)
            }
            this.repPass = target.value
          },
          blur: (e) => {
            const target = e.target as HTMLInputElement
            if (this.pass === target.value) {
              this.valid.repeatPassword = true
              checkRepPass(e, this.pass, this.valid)
              setDisableBtn('button', this.valid)
            } else {
              this.valid.repeatPassword = false
              checkRepPass(e, this.pass, this.valid)
              setDisableBtn('button', this.valid)
            }
          },
          focus: (e) => {
            const target = e.target as HTMLInputElement
            if (this.pass === target.value) {
              this.valid.repeatPassword = true
              setDisableBtn('button', this.valid)
            } else {
              this.valid.repeatPassword = false
              setDisableBtn('button', this.valid)
            }
          }
        }
      }
    })

    this.children.button = new Button({
      label: 'Создать аккаунт',
      events: {
        click: (e) => {
          e.preventDefault()
          const target = e.target as HTMLInputElement
          const parent = target.closest('.auth__form') as HTMLFormElement
          const inputs = parent.querySelectorAll('.input__input')
          let formValues = {}
          inputs.forEach((input: any) => {
            formValues = { ...formValues, [input.name]: input.value }
          })
          this.onSubmit(formValues)
        }
      }
    })

    this.children.navLink = new NavLink({
      to: '/',
      linkText: 'Уже есть аккаунт?',
      events: {click: () => {}}
    })
  }

  onSubmit(data: any) {
    AuthController.signup(data as SignupData)
  }

  render () {
    return this.compile(template, {
      ...this.props,
      title: 'Регистрация'
    })
  }
}

export default SignupPage
