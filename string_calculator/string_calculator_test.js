'use strict';

const StringCalculator = require('./string_calculator.js')

test('StringCalculator return 0 when a string is empty', () => {
    const stringCalculator = new StringCalculator();

    const addResult = stringCalculator.add('')

    expect(addResult).toBe(0);
});

// A single number returns the value `'1' => 1` `'2' => 2`

test('StringCalculator when given string "1", returns its value', () => {
    const stringCalculator = new StringCalculator();

    const addResult = stringCalculator.add('1')

    expect(addResult).toBe(1);
});

test('StringCalculator when given string "2", returns its value', () => {
    const stringCalculator = new StringCalculator();

    const addResult = stringCalculator.add('2')

    expect(addResult).toBe(2);
});
