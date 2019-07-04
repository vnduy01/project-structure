const Middleware = require('./../middleware');
module.exports   = {
    prefix: '',
    routes: {
        create: {
            method  : 'POST',
            url     : '/books',
            handlers: [
                Middleware.Book.create,
                Middleware.Book.validate
            ]
        },
        update: {
            method  : 'put',
            url     : '/books/:id',
            handlers: [
                Middleware.Book.create,
                Middleware.Book.validate
            ]
        }
    }
};
