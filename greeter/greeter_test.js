'use strict';

const Greeter = require('./greeter.js')

test('greeter can greet Chiara', () => {

    const greeting = new Greeter().greet('Chiara');

    expect(greeting).toBe('Hello, Chiara');
});

test('greeter can greet Rony', () => {

    const greeting = new Greeter().greet('Rony');

    expect(greeting).toBe('Hello, Rony');
});
