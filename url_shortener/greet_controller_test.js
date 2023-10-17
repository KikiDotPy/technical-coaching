const GreetController = require('./greet_controller.js');

test('greet_controller respond with the message "Hello, World!"', () => {
    const controller = new GreetController();

    const {statusCode, body} = controller.respondTo('', {}, {});

    expect(statusCode).toBe(200);
    expect(body).toEqual({"message": "Hello, world!"})
});

