const Route    = require('koa-router');

module.exports = async (context) => {
    const route = new Route(context.config.http.route);

    route.use();
    return route;
};
