'use strict';

class Greeter {
    constructor(date = new Date()) {
        this.date = date;
    }

    /*
    * 5am - 12pm - provide a morning message
    * 12pm - 5pm - provide an afternoon message
    * 5pm - 7pm - provide an evening message
    * 7pm - 5am - provide a night message
    * */
    greet(name) {
        const time = this.date.getHours()

        return `Good evening, ${name}`
    }
}

module.exports = Greeter;
