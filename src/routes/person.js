'use strict'

var express = require('express');
var PersonController = require('../controllers/person');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();
/*
--GET
*/
api.get('/', PersonController.listPerson);
api.get('/search', PersonController.searchPerson);
/*
--POST
*/
api.post('/', PersonController.savePerson);

module.exports = api;