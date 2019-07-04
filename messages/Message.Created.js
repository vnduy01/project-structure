const MessageSuccess = require('./Message.Success');
const STATUS         = 201;

class MessageCreated extends MessageSuccess {
    constructor (response) {
        super();
        this.props = {
            code: 'CREATED',
            ...response
        }
    }

    get response () {
        return this.props;
    }

    get status () {
        return STATUS;
    }
}

module.exports = MessageCreated;
