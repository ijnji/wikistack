var express = require('express');
var swig = require('swig');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({
    cache: false
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
    res.render('index');
});

var server = app.listen(3000, function() {
    console.log('listening on port: 3000');
});
