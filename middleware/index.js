const Message = require('./../messages');

module.exports = {
    Book: {
        create  : async (context, next) => {
            return new Message.MessageCreated({
                success: true,
                book   : {
                    foo: 'bar',
                    id : Math.random()
                }
            });
        },
        validate: async (context, next) => {
            await next();
        }
    }
};
