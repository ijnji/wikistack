var express = require('express');

module.exports = function wikiRouter() {
    var router = express.Router();

    router.get('/', function(req, res, next) {
        console.log('get root');
        res.redirect('/');
    });

    router.post('/', function(req, res, next) {
        console.log(req.body);
        res.send('got to POST /wiki/');
    });

    router.get('/add', function(req, res, next) {
        res.render('addpage');
    });

    return router;
};
