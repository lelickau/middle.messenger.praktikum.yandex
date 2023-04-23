const setDisableBtn = (btnClass: string, validData: any) => {
  const submitBtn = document.querySelector(`.${btnClass}`) as HTMLButtonElement
  for (let key in validData) {
    if (!validData[key as string]) {
      submitBtn.disabled = true
      return
    } else {
      submitBtn.disabled = false
    }
  }
}

export default setDisableBtn
