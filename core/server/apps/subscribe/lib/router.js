var path                = require('path'),
    express             = require('express'),
    api                 = require('../../../api'),
    subscribeRouter     = express.Router();

function logger(req, res, next) {
    console.log(req.body);
    console.log(req.query);
    next();
}

function redirectBack(req, res, next) {
    console.log("back!");
    return res.redirect('/test-form/');
}

function storeSubscriber(req, res, next) {
    return api.subscribers.add({subscribers: [req.body]}).then(function (result) {
        console.log(result);
        next();
    });
}

// password-protected frontend route
subscribeRouter.route('/subscribe')
    .post(
        logger,
        storeSubscriber,
        redirectBack
    );

module.exports = subscribeRouter;
