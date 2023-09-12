'use strict';

const Greeter = require('./greeter.js')


test('greeter can greet Marco in the morning', () => {
    const thisMorning =  new Date('2023-09-05T11:00:00');

    const greeting = new Greeter(thisMorning).greet('Marco');

    expect(greeting).toBe('Good morning, Marco');
});

test('greeter can greet Marco without extra spaces', () => {

    const greeting = new Greeter().greet('  Marco   ');

    expect(greeting).toBe('Hello, Marco');
});

test('greeter can greet with upper first case', () => {

    const greeting = new Greeter().greet('pallavi');

    expect(greeting).toBe('Hello, Pallavi');
});

// `greet` returns `Good morning <name>` when the time is 06:00-12:00

test('greet uses "Good morning" when the time is 06:00-12:00', () => {
    const morningTime = new Date('2023-09-07T10:30:00')

    const greeting = new Greeter(morningTime).greet('Marisa');

    expect(greeting).toBe('Good morning, Marisa');
});

