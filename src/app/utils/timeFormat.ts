export const timeFormat = (d, f) => {
    const date = new Date(Number(d))
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    if (f !== undefined) {
        return [year, month, day].map(formatNumber).join('-')
    } else {
        return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
    }
}

const formatNumber = n => {
    let _n = n.toString()
    return _n[1] ? _n : '0' + _n
}

export default timeFormat
