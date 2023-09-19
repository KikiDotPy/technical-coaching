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

    test('when given negative numbers throws an exception with the invalid numbers', () => {
        expect(() => {
            stringCalculator.add('-1,2,-3')
        }).toThrow('negatives not allowed: -1,-3')
    });

    test('when given more negative numbers throws an exception with the invalid numbers', () => {
        expect(() => {
            stringCalculator.add('-5,-2,7')
        }).toThrow('negatives not allowed: -5,-2')
    });

    test('ignores numbers greater than 1000', () => {
        const addResult = stringCalculator.add('2, 1002')

        expect(addResult).toBe(2);
    });

    // test('should complain about non numbers', () => {
    //     expect(() => stringCalculator.add('2,c,6'))
    //         .toThrow('Not a number: c')
    // });
    //
    test('accepts split character at the beginning of input', () => {
        const addResult = stringCalculator.add('//#\n1#2')

        expect(addResult).toBe(3);
    });

    test('accepts split characters at the beginning of input', () => {
        const addResult = stringCalculator.add('//###\n5###7')

        expect(addResult).toBe(12);
    });

    test('accepts split characters at the beginning of input', () => {
        const addResult = stringCalculator.add('//#jk\n32#jk15')

        expect(addResult).toBe(47);
    });
})

test('pippo!', () => {
    const string = '//123\n567\nbla'
    const i = string.indexOf('\n');
    const result = string.substring(2, i)

    expect(result).toBe('123');
});
