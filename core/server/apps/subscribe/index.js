var config     = require('../../config'),
    errors     = require('../../errors'),
    i18n       = require('../../i18n'),
    middleware = require('./lib/middleware'),
    router     = require('./lib/router');

module.exports = {
    activate: function activate() {
        console.log("----- activate ----");
    },

    setupRoutes: function setupRoutes(blogRouter) {
        blogRouter.use(router);
    }
};
