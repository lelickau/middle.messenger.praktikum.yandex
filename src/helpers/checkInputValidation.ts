import validation from './validation'

const checkInputValidation = (event: Event, type: string, validData: Record<string, boolean>) => {
  const target = event.target as HTMLInputElement
  const parent = target.closest('.auth__input-box') as HTMLDivElement
  const error = parent.querySelector('.error') as HTMLParagraphElement
  const isValid = validation(target.value, type)
  if (isValid) {
    validData[target.name] = true
    error.classList.add('hidden')
  } else {
    error.classList.remove('hidden')
    validData[target.name] = false
  }
}

export default checkInputValidation
