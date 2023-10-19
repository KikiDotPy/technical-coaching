
class GreetController {
    respondTo(url, query, payload) {
        const name = query.name || 'world'

        let body = {message: `Hello, ${name}!`};
        return {statusCode: 200, body: body};
    }
}

module.exports = GreetController;
