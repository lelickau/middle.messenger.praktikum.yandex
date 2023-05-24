import { withStore } from '../../packages/store/Store'
import { IUser } from '../../types/IUser'
import { ComeBack } from '../../components/comeBack/ComeBack'
import Block from '../../packages/block/Block'
import LabelUpload from '../../components/uploadAvatar/labelUpload/LabelUpload'
import Button from '../../components/button/Button'
import Label from '../../components/inputElement/label/Label'
import checkInputValidation from '../../helpers/checkInputValidation'
import setDisableBtn from '../../helpers/setDisableBtn'
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter'
import ProfileController from '../../controllers/ProfileController'
import template from './editProfile.hbs'

const dataLabels = [
  {
    name: 'first_name',
    label: 'Имя',
    error: 'Имя не должно содержать пробелы или цифры',
    type: 'text',
    typeValidation: 'word'
  },
  {
    name: 'second_name',
    label: 'Фамилия',
    error: 'Фамилия не должна содержать пробелы или цифры',
    type: 'text',
    typeValidation: 'word'
  },
  {
    name: 'login',
    label: 'Логин',
    error: 'Минимум 3 латинских символа',
    type: 'text',
    typeValidation: 'text'
  },
  {
    name: 'email',
    label: 'Почта',
    error: 'Почта не корректная',
    type: 'email',
    typeValidation: 'email'
  },
  {
    name: 'phone',
    label: 'Телефон',
    error: 'Номер телефона не корректный',
    type: 'text',
    typeValidation: 'phone'
  }
]

class EditProfile extends Block {
  valid = {
    first_name: true,
    second_name: true,
    email: true,
    phone: true
  }

  init() {
    this.children.comeBack = new ComeBack({
      to: '/settings',
      events: {
        click: () => {}
      }
    })

    this.children.avatar = new LabelUpload({
      img: this.props.data.avatar,
      input: {
        events: {
          input: async (e) => {
            const target = e.target as HTMLInputElement
            if (target.files) {
              await ProfileController.updateAvatar(target.files[0])
            }
          }
        }
      }
    })

    this.children.labels = dataLabels.map((label) => {
      return new Label({
        id: label.name,
        label: label.label,
        error: label.error,
        input: {
          name: label.name,
          id: label.name,
          label: label.label,
          type: label.type,
          value: this.props.data[label.name],
          events: {
            input: (e) => {
              e.preventDefault()
              const target = e.target as HTMLInputElement
              checkInputValidation(e, label.typeValidation, this.valid)
              setDisableBtn('button', this.valid)
              if (label.typeValidation === 'word') {
                target.value = capitalizeFirstLetter(target.value)
              }
            },
            blur: (e) => {
              checkInputValidation(e, label.typeValidation, this.valid)
              setDisableBtn('button', this.valid)
            },
            focus: (e) => {
              checkInputValidation(e, label.typeValidation, this.valid)
              setDisableBtn('button', this.valid)
            }
          }
        }
      })
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
        value: this.props.data['display_name'],
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
          this.onSubmit(formValues)
        }
      }
    })
  }

  protected componentDidUpdate(_: any, newProps: any): boolean {
    this.children.avatar = this.update(newProps)

    return true
  }

  update(props: any) {
    return new LabelUpload({
      img: props.data.avatar,
      input: {
        events: {
          input: async (e) => {
            const target = e.target as HTMLInputElement
            if (target.files) {
              await ProfileController.updateAvatar(target.files[0])
            }
          }
        }
      }
    })
  }

  onSubmit(data: any) {
    ProfileController.updateInfo(data as IUser)
  }

  render() {
    return this.compile(template, {
      ...this.props,
      title: this.props['first_name']
    })
  }
}

const withUser = withStore((state) => {
  return { ...state.user }
})

export const EditProfilePage = withUser(EditProfile)
