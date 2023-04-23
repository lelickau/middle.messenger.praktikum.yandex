const validation = (value: string, type: string) => {
  let isValid = false
  switch (type) {
      case 'email':
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
        isValid = EMAIL_REGEXP.test(value)

        break
      case 'text':
        const TEXT_REGEXP = /^[a-zA-Z0-9]+$/iu
        let isTestText = TEXT_REGEXP.test(value)
        isValid = value.length > 2 && isTestText

        break
      case 'password':
        const PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
        isValid = PASSWORD_REGEXP.test(value)

        break
      case 'word':
        const WORD_REGEXP = /^[а-яА-ЯёЁa-zA-Z\h-]+$/gm
        isValid = WORD_REGEXP.test(value)

        break
      case 'phone':
        const PHONE_REGEXP = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/gm
        isValid = PHONE_REGEXP.test(value)

        break
      default:
          break
  }
  return isValid
}

export default validation
