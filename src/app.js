'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var routes = {
	person: require('./routes/person'),
	family: require('./routes/family'),
	address: require('./routes/address'),
	addressComponent: require('./routes/addressComponent'),
	phones: require('./routes/phones'),
	academicUnity: require('./routes/academicUnity'),
	career: require('./routes/career')
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

app.use('/v1/persons', routes.person);
app.use('/v1/families', routes.family);
app.use('/v1/addresses', routes.address);
app.use('/v1/addressComponents', routes.addressComponent);
app.use('/v1/phones', routes.phones);
app.use('/v1/academicUnity', routes.academicUnity);
app.use('/v1/career', routes.career);

module.exports = app;