/**
 * 防抖函数
 * @param method 事件触发的操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
export const debounce = (method, delay) => {
    let timer = null
    return function () {
        const self = this
        const args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            method.apply(self, args)
        }, delay)
    }
}
