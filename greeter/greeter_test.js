'use strict';

const Greeter = require('./greeter.js')

test('greeter can greet Chiara in the evening', () => {

    const greeting = new Greeter().greet('Chiara');

    expect(greeting).toBe('Good evening, Chiara');
});

test('greeter can greet Rony in the evening', () => {

    const greeting = new Greeter().greet('Rony');

    expect(greeting).toBe('Good evening, Rony');
});

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
