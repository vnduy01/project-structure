module.exports = {
    Book: {
        create  : async (context, next) => {
            console.log('create middleware');
            context.body   = {
                code   : 'FUCK_VIU',
                message: 'DONE'
            };
            context.status = 201
        },
        validate: async (context, next) => {
            await next();
        }
    }
};
