'use strict';

const StringCalculator = require('./string_calculator.js')

describe('StringCalculator', () => {
    const stringCalculator = new StringCalculator();

    test('returns 0 when a string is empty', () => {
        const addResult = stringCalculator.add('')

        expect(addResult).toBe(0);
    });

    test('when given string "1", returns its value', () => {
        const addResult = stringCalculator.add('1')

        expect(addResult).toBe(1);
    });

    test('when given string "2", returns its value', () => {
        const addResult = stringCalculator.add('2')

        expect(addResult).toBe(2);
    });

    test('when given two strings "1" and "2" comma-separated, returns their sum 3', () => {
        const addResult = stringCalculator.add('1,2')

        expect(addResult).toBe(3);
    });

    test('when given two strings "10" and "20" comma-separated, returns their sum 30', () => {
        const addResult = stringCalculator.add('10,20')

        expect(addResult).toBe(30);
    });

    test('when given two strings "1" and "2" on two different lines, returns their sum 3', () => {
        const addResult = stringCalculator.add('1\n2')

        expect(addResult).toBe(3);
    });

    test('can sum tokens separated with comma or new line', () => {
        const addResult = stringCalculator.add('1\n2,3\n4')

        expect(addResult).toBe(10);
    });
})
