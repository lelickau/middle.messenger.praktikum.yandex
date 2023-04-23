import Button from '../../components/button/Button'
import ComeBack from '../../components/comeBack/ComeBack'
import Label from '../../components/inputElement/label/Label'
import checkInputValidation from '../../helpers/checkInputValidation'
import setDisableBtn from '../../helpers/setDisableBtn'
import showPassword from '../../helpers/showPassword'
import Block from '../../packages/block/Block'
import editPasswordTmp from './editPassword.hbs'

class EditPasswordPage extends Block {
  constructor() {
    super({})
  }
  valid = { oldPassword: false, newPassword: false, repeatPassword: false }
  pass = ''
  repPass = ''

  init() {
    this.children.comeBack = new ComeBack({
      to: '/profile',
      events: { click: () => {}}
    })

    this.children.oldPass = new Label({
      id: 'oldPassword',
      label: 'Старый пароль',
      error: '',
      eye: {
        class: true,
        events: {
          click: (e: Event) => {
            showPassword(e)
          }
        }
      },
      input: {
        name: 'oldPassword',
        id: 'oldPassword',
        label: 'Старый пароль',
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
  
    this.children.labelPass = new Label({
      id: 'newPassword',
      label: 'Новый пароль',
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
        name: 'newPassword',
        id: 'newPassword',
        label: 'Новый пароль',
        type: 'password',
        events: {
          input: (e) => {
            e.preventDefault()
            const target = e.target as HTMLInputElement
            checkInputValidation(e, 'password', this.valid)
            setDisableBtn('button', this.valid)
            this.pass = target.value
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
      label: 'Новый пароль (еще раз)',
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
        label: 'Новый пароль (еще раз)',
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
              setDisableBtn('button', this.valid)
            } else {
              this.valid.repeatPassword = false
              setDisableBtn('button', this.valid)
            }
            this.repPass = target.value
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
            this.repPass = target.value
          }
        }
      }
    })

    this.children.button = new Button({
      label: 'Сохранить',
      events: {
        click: (e) => {
          e.preventDefault()
          const target = e.target as HTMLInputElement
          const parent = target.closest('.profile__info') as HTMLFormElement
          const inputs = parent.querySelectorAll('.input__input')
          let formValues = {}
          inputs.forEach((input: any) => {
            formValues = { ...formValues, [input.name]: input.value }
          })
          console.log(formValues)
        }
      }
    })
  }

  render() {
    return this.compile(editPasswordTmp, {
      ...this.props,
      title: 'Сменить пароль'
    })
  }
}

export default EditPasswordPage
