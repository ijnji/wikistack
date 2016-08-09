var express = require('express');
var models = require('../models');
var Page = models.Page;
var User = models.User;
module.exports = function wikiRouter() {
    var router = express.Router();

    router.get('/', function(req, res, next) {
        Page.findAll({})
        .then(function(foundPages) {
            var foundPages = foundPages.map(function(page) {
                return page.dataValues;
            });
            console.log(foundPages);
            res.render('index', {
                foundPages: foundPages
            });
        });
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
            res.redirect(page.route);
        });
    });



    router.get('/add', function(req, res, next) {
        res.render('addpage');
    });

    router.get('/:urlTitle', function(req,res, next){
      Page.findOne({
        where: {
          urlTitle: req.params.urlTitle
        }
      })
      .then(function(foundPage){
        var page = foundPage.dataValues;
        res.render('wikipage', page);
      })
      .catch(next);
    });
    return router;
};
