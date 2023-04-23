function queryStringify(data: Record<string, any>) {
  let str = '?'
  for (let key in data) {
    if (str.slice(-1) !== '?') {
      str += `&${key}=${data[key]}`
    } else {
      str += `${key}=${data[key]}`
    }
  }
  return str
}

export default queryStringify
