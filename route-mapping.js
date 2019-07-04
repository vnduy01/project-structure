const Route       = require('koa-router');
const lodash      = require('lodash');
const routeConfig = require('./routes');
const config      = require('./config');
module.exports    = () => {
    const router = new Route(config.http.route);
    lodash.forEach(routeConfig, (route, routeName) => {
        lodash.forEach(route.routes, (value, key) => {
            console.log(value, key);
            console.log(router);
            console.log(router[value.method]);
            router[value.method.toLowerCase()](`${routeName}-${key}`, value.url, ...value.handlers);
        });
    });
    return router;
};
