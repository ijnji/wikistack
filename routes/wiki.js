var express = require('express');

module.exports = function wikiRouter() {
    var router = express.Router();

    router.get('/', function(req, res, next) {
        console.log('get root');
        res.send('got to GET /wiki/');
    });

    router.post('/', function(req, res, next) {
        console.log('post root');
        res.send('got to POST /wiki/');
    });

    router.get('/add', function(req, res, next) {
        console.log('get add');
        res.send('got to GET /wiki/add');
    });

    return router;
};
