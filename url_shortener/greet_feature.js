
class GreetController {
    handle(url, query, payload) {
        const body = {message: `Hello, world`};
        return {statusCode: 200, body: body};
    }
}

module.exports = GreetController;
