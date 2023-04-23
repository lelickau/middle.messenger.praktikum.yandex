import Block from '../../packages/block/Block'
import ComeBack from '../../components/comeBack/ComeBack'
import LabelUpload from '../../components/uploadAvatar/labelUpload/LabelUpload'
import Button from '../../components/button/Button'
import Label from '../../components/inputElement/label/Label'
import editProfileTmp from './editProfile.hbs'
import img from '../../static/img/def-img.png'
import checkInputValidation from '../../helpers/checkInputValidation'
import setDisableBtn from '../../helpers/setDisableBtn'
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter'

class EditProfilePage extends Block {
  constructor() {
    super({})
  }

  valid = {
    first_name: false,
    second_name: false,
    email: false,
    phone: false
  }

  init() {
    this.children.comeBack = new ComeBack({
      to: '/profile',
      events: {
        click: () => {}
      }
    })

    this.children.avatar = new LabelUpload({
      img,
      input: {
        events: {
          input: () => {}
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
  
    this.children.chatName = new Label({
      id: 'display_name',
      label: 'Имя в чате',
      error: '',
      input: {
        name: 'display_name',
        id: 'display_name',
        label: 'Имя в чате',
        type: 'text',
        events: {
          input: () => {},
          blur: () => {},
          focus: () => {}
        }
      }
    })

    this.children.button = new Button({
      label: 'Сохранить',
      events: {
        click: (e) => {
          e.preventDefault()
          const target = e.target as HTMLButtonElement
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
    return this.compile(editProfileTmp, {
      ...this.props,
      title: 'Иван'
    })
  }
}

export default EditProfilePage
