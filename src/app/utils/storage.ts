export default class Storage {
    private name: string;
    private storage;
    private data: Object;
    constructor(name: string, config = { initialValue: {}, storage: sessionStorage }) {
        const { initialValue = {}, storage = sessionStorage } = config;
        this.name = name
        this.storage = storage
        this.data = storage[this.name]
            ? JSON.parse(storage[this.name])
            : initialValue
    }

    set = (key, value) => {
        this.data[key] = value
        this.storage[this.name] = JSON.stringify(this.data)
    }

    get = (key, defaultValue = undefined) => {
        if (!this.storage[this.name]) return defaultValue
        const data = JSON.parse(this.storage[this.name])
        return data[key] || defaultValue
    }

    remove = key => {
        delete this.data[key]
        this.storage[this.name] = JSON.stringify(this.data)
    }

    clear = () => {
        this.data = {}
        this.storage[this.name] = JSON.stringify(this.data)
    }
}

export const app = new Storage('app')
export const oauth = new Storage('oauth')
export const user = new Storage('user')
export const buyAgainOrders = new Storage('buyAgainOrders')
export const agentOrders = new Storage('agentOrders')
