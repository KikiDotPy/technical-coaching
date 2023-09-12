'use strict';

function isMorningHour(currentHours) {
    return currentHours >= 6 && currentHours < 12;
}

function isAfternoonHour(currentHours) {
    return currentHours >= 18 && currentHours < 22;
}

function isNightHour(currentHours) {
    return currentHours >= 22 || currentHours < 6;
}

class Greeter {
    constructor(date = new Date()) {
        this.date = date;
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

        if (isMorningHour(currentHours)) {
            return 'Good morning'
        }
        if (isAfternoonHour(currentHours)) {
            return 'Good evening'
        }
        if (isNightHour(currentHours)) {
            return 'Good night'
        }

        return 'Hello'
    }
}

module.exports = Greeter;
