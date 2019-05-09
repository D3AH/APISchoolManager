'use strict'

var express = require('express');
var CarrerController = require('../controllers/career');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();

/*
--GET
*/
api.get('/', CarrerController.listCareers);

/*
--POST
*/
api.post('/', CarrerController.saveCareer);

module.exports = api;