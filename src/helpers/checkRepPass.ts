const checkRepPass = (event: Event, pass: string, validData: Record<string, boolean>) => {
  const target = event.target as HTMLInputElement
  const parent = target.closest('.auth__input-box') as HTMLDivElement
  const error = parent.querySelector('.error') as HTMLParagraphElement
  
  if (target.value === pass) {
    validData[target.name] = true
    error.classList.add('hidden')
  } else {
    error.classList.remove('hidden')
    validData[target.name] = false
  }
}

export default checkRepPass
