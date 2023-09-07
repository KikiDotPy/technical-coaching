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
        const currentTime = this.date.getHours()
        if (currentTime >= 6 && currentTime <= 12){
            return 'Good morning'
        }
        return 'Hello'
    }
}

module.exports = Greeter;
