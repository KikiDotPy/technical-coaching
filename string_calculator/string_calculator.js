'use strict';

class StringCalculator {
    add(string) {
        const numbersStrings = string.split(',')
        const numbers = numbersStrings.map(s => Number(s));
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        return sum;
    }
}

module.exports = StringCalculator
