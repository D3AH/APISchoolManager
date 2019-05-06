'use strict'

var express = require('express');
var AddressComponentController = require('../controllers/addressComponent');

var api = express.Router();

/**
 * GET
 */
api.get('/', AddressComponentController.listAddressComponets);

/**
 * POST
 */
api.post('/', AddressComponentController.saveAddressComponent);

module.exports = api;