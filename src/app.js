'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var routes = {
	person: require('./routes/person'),
	family: require('./routes/family') 	
};

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/v1/person', routes.person);
app.use('/v1/family', routes.family);

module.exports = app;