class TypeChecker {
    constructor() {}

    isObject(object) {
        return typeof object === 'object' && null !== object && !Array.isArray(object)
    }

    isNotObject(object) {
        return !this.isObject(object)
    }

    isFunction(func) {
        return typeof func === 'function'
    }

    isNotFunction(func) {
        return !this.isFunction(func)
    }

    isString(string) {
        return String(string) === string
    }

    isNotString(string) {
        return !this.isString(string)
    }
}

const typeChecker = new TypeChecker()

export { TypeChecker, typeChecker }
