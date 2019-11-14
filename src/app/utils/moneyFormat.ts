export const moneyFormat = (value, decimals = 2, options: any) => {
    if (!value) return '0.00'
    value = (value + '').replace(/[^0-9+-Ee.]/g, '')
    const decPoint = options.decPoint || '.'
    const thousandsSep = options.thousandsSep || ','
    const roundTag = options.roundTag || 'round'
    let n = !isFinite(+value) ? 0 : +value
    let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
    let sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep
    let dec = typeof decPoint === 'undefined' ? '.' : decPoint
    let s: any
    let toFixedFix = function (n, prec) {
        let k = Math.pow(10, prec)
        return (
            '' +
            parseFloat(
                Math[roundTag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)
            ) /
            k
        )
    }
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
    var re = /(-?\d+)(\d{3})/
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, '$1' + sep + '$2')
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || ''
        s[1] += new Array(prec - s[1].length + 1).join('0')
    }
    return s.join(dec)
}
export default moneyFormat;