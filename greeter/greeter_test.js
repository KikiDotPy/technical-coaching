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

test('greet uses "Good evening" when the time is 18:00-22:00', () => {
    const eveningTime = new Date('2023-09-07T18:30:00')

    const greeting = new Greeter(eveningTime).greet('Garrus');

    expect(greeting).toBe('Good evening, Garrus');
});

test('greet uses "Good night" when the time is after 22', () => {
    const bedTime = new Date('2023-09-07T23:30:00')

    const greeting = new Greeter(bedTime).greet('Andariel');

    expect(greeting).toBe('Good night, Andariel');
});

test('greet uses "Good night" when the time is before 6', () => {
    const bedTime = new Date('2023-09-07T03:30:00')

    const greeting = new Greeter(bedTime).greet('Andariel');

    expect(greeting).toBe('Good night, Andariel');
});
