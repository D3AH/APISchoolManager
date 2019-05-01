'use strict'

var express = require('express');
var PersonController = require('../controllers/person');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();

api.get('/check', PersonController.checkPerson);

api.post('/savePerson', PersonController.savePerson);

api.get('/listPerson', PersonController.listPerson );

api.post('/searchPerson', PersonController.searchPerson);

module.exports = api;