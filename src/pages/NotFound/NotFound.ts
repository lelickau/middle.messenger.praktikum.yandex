import notFoundTmp from './notFound.hbs'

const NotFound = () => {
  const content = {
    code: '404',
    text: 'Не туда попали',
    linkText: 'Назад к чатам'
  }

  return notFoundTmp(content)
}

export default NotFound
