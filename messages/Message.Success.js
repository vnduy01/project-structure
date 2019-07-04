const STATUS = 200;

class MessageSuccess {

    constructor (response) {
        this.props = {
            code: 'SUCCESS',
            ...response
        };
    }

    get status () {
        return STATUS;
    }

    get response () {
        return this.props
    }
}

module.exports = MessageSuccess;
