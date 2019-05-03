'use strict'

var express = require('express');
var PhonesController = require('../controllers/phones');
var md_auth = require('../middlewares/authenticated');

var api = express.Router();

/*
--GET
*/
api.get('/', PhonesController.listPhones);

/*
--POST
*/
api.post('/', PhonesController.savePhones);

module.exports = api;