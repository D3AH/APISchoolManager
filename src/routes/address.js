'use strict'

var express = require('express');
var AddressController = require('../controllers/address');

var api = express.Router();

api.post('/saveAddress', AddressController.saveAddress);

module.exports = api;