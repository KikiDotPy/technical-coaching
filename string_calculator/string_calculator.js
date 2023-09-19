'use strict';

class StringCalculator {
    add(string) {
        let numbersStrings = this.tokenize(string);

        const numbers = numbersStrings
            .map(s => Number(s))
            .filter(num => num < 1000);

        this.checkNoNegatives(numbers);

        const sumAccumulator = (tot, item) => tot + item;
        return numbers.reduce(sumAccumulator, 0);
    }

    checkNoNegatives(numbers) {
        const negatives = numbers.filter(num => num < 0);

        if (negatives.length > 0) {
            throw `negatives not allowed: ${negatives.join(',')}`
        }
    }

    tokenize(string) {
        let delimiter = ','
        if (string.startsWith('//')){
            const indexOfNewLine = string.indexOf('\n');
            delimiter = string.substring(2, indexOfNewLine);
        }

        let numbersStrings = string.split(delimiter)
        let finalArray = []

        for (let i = 0; i < numbersStrings.length; i++) {
            const currentArrayElement = numbersStrings[i].split('\n')
            finalArray = finalArray.concat(currentArrayElement)
        }

        return finalArray;
    }
}

module.exports = StringCalculator
