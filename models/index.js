var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

var Page = db.define('page', {
    title: {
        type: Sequalize.STRING
    },
    urlTitle: {
        type: Sequalize.STRING
    }
})