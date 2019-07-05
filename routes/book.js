const Middleware = require('./../middleware');
module.exports   = {
    prefix: '',
    routes: {
        create: {
            method  : 'POST',
            url     : '/books',
            handlers: [
                Middleware.Book.create
            ]
        },
        update: {
            method  : 'put',
            url     : '/books/:id',
            handlers: [
                Middleware.Book.update
            ]
        }
    }
};
