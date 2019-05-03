'use strict'

var express = require('express');
var AddressComponentController = require('../controllers/addressComponent');

var api = express.Router();

/**
 * POST
 */
api.post('/', AddressComponentController.saveAddressComponent);

module.exports = api;