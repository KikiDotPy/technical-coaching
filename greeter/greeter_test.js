'use strict';

const Greeter = require('./greeter.js')

describe('greeter in the afternoon', () => {
    let greeter;

    beforeEach(() => {
        let afternoonTime = new Date('2023-09-05T14:00:00');
        greeter = new Greeter(afternoonTime)
    });

    // i nostri test
    test('greets Marco without extra spaces', () => {

        const greeting = greeter.greet('  Marco   ');

        expect(greeting).toBe('Hello, Marco');
    });

    test('greets with upper first case', () => {

        const greeting = greeter.greet('pallavi');

        expect(greeting).toBe('Hello, Pallavi');
    });
});

test('greet uses "Good morning" when the time is 06:00-12:00', () => {
    const morningTime = new Date('2023-09-07T10:30:00')

    const greeting = new Greeter(morningTime).greet('Marisa');

    expect(greeting).toBe('Good morning, Marisa');
});

test('greet uses "Hello" after lunch', () => {
    const morningTime = new Date('2023-09-07T12:30:00')

    const greeting = new Greeter(morningTime).greet('Marisa');

    expect(greeting).toBe('Hello, Marisa');
});

