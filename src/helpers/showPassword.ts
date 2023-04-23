const showPassword = (event: Event) => {
  const target = event.target as HTMLInputElement
  target.classList.toggle('eye-pass--active')
  const parent = target.closest('.auth__input-box') as HTMLDivElement
  const input = parent.querySelector('.input__input') as HTMLInputElement
  input.type === 'text' ? input.type = 'password' : input.type = 'text'
}

export default showPassword
