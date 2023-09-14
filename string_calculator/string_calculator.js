'use strict';

class StringCalculator {
    add(string) {
        if (string === '') {
            return 0;
        }
        return Number(string);
    }
}

module.exports = StringCalculator
