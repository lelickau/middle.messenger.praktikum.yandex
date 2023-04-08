import loginTmp from './login.hbs'

const login = () => {
  const loginContent = {
    title: 'Вход',
    btnText: 'Авторизоваться',
    linkText: 'Нет аккаунта?',
  }

  return loginTmp(loginContent)
}

export default login
