var express = require('express');
var models = require('../models');
var Page = models.Page;
var User = models.User;
module.exports = function wikiRouter() {
    var router = express.Router();

    router.get('/', function(req, res, next) {
        console.log('get root');
        res.redirect('/');
    });

    router.post('/', function(req, res, next) {
        var author = req.body.author;
        var email = req.body.email;
        var title = req.body.title;
        var content = req.body.content;
        var status = req.body.status;
        var page = Page.build({
          title: title,
          content: content,
          status: status
        });
        page.save().then(function(){
          res.redirect('/');
        });
    });

    router.get('/add', function(req, res, next) {
        res.render('addpage');
    });

    return router;
};
