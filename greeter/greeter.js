'use strict';

class Greeter {
    constructor(date = new Date()) {
        this.date= date;
    }

    greet(name) {
        const finalName = this.sanitizeName(name)
        const salutation = this.getSalutation(this.date)

        return `${salutation}, ${finalName}`
    }

    sanitizeName(name) {
        const trimmedName = name.trim()
        const firstLetter = trimmedName[0].toUpperCase()
        const restOfName = trimmedName.slice(1)

        return firstLetter + restOfName
    }

    getSalutation() {
        const currentHours = this.date.getHours()

        if (currentHours >= 6 && currentHours < 12){
            return 'Good morning'
        }

        return 'Hello'
    }
}

module.exports = Greeter;
