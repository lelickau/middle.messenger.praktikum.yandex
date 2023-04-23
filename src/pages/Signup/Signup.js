import signupTmp from './signup.hbs'

const Signup = () => {
  const signupContent = {
    title: 'Регистрация',
    btnText: 'Создать аккаунт',
    linkText: 'Уже есть аккаунт?',
  }

  return signupTmp(signupContent)
}


export default Signup
