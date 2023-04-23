import errorServTmp from './errorServ.hbs'

const ErrorServ = () => {
  const content = {
    code: '500',
    text: 'Мы уже фиксим',
    linkText: 'Назад к чатам'
  }

  return errorServTmp(content)
}

export default ErrorServ
