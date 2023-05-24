const getTime = (dateData: string): string => {
    const date = new Date(dateData)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`

    return time
}

export default getTime
