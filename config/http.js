module.exports = {
    port  : process.env.PORT || 9999,
    domain: process.env.DOMAIN,
    route : {
        prefix: `/${process.env.API_VERSION || 'v1'}`
    }
};
