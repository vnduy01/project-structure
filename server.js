const Koa        = require('koa');
const cors       = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const Route      = require('./route-mapping');
const config     = require('./config');
(async () => {
    const app   = new Koa();
    const route = Route();
    console.log(route);
    app
        .use(cors({origin: '*'}))
        .use(bodyParser())
        .use(route.routes())
        .use(route.allowedMethods())
        .listen(config.http.port, (err) => {
            if (err) {
                console.error(err);
            }
            console.info('Server is running on port ', config.http.port);
        })
    ;
})();
