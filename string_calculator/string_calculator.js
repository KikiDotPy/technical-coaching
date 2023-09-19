'use strict';

class StringCalculator {
    add(string) {
        let numbersStrings = this.tokenize(string);

        const numbers = numbersStrings.map(s => Number(s));
        // la reduce non esiste cosa facciamo?
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        // const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        return sum;
    }

    tokenize(string) {
        let numbersStrings = string.split(',')
        let finalArray = []

        for (let i = 0; i < numbersStrings.length; i++) {
            const currentArrayElement = numbersStrings[i].split('\n')
            finalArray = finalArray.concat(currentArrayElement)
        }

        return finalArray;
    }
}

module.exports = StringCalculator
