const Message = require('./messages');

module.exports = async (context, next) => {
    try {
        const message  = await next();
        context.body   = message.response;
        context.status = message.status;
    } catch (e) {
        if (e instanceof Message.MessageError) {
            context.body   = e.response;
            context.status = e.status;
        }
    }
};
