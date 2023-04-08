import notFoundTmp from './notFound.hbs'

const NotFound = () => {
  const content = {
    code: '500',
    text: 'Мы уже фиксим',
    linkText: 'Назад к чатам',
  }

  return notFoundTmp(content)
}

export default NotFound
