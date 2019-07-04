class MessageError extends Error {
    constructor (message) {
        super();
        this.props = {
            message,
            code: 'UNEXPECTED_ERROR'
        };
    }

    get status () {
        return 500;
    }

    get response () {
        return this.props
    }

}

module.exports = MessageError;
