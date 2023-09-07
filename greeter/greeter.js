'use strict';

class Greeter {

    greet(name) {
        const finalName = this.sanitizeName(name)

        return `Hello, ${finalName}`
    }

    sanitizeName(name) {
        const trimmedName = name.trim()
        const firstLetter = trimmedName[0].toUpperCase()
        const restOfName = trimmedName.slice(1)

        return firstLetter + restOfName
    }
}

module.exports = Greeter;
