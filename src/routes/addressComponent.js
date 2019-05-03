'use strict'

var express = require('express');
var AddressComponentController = require('../controllers/addressComponent');

var api = express.Router();

api.post('/', AddressComponentController.saveAddress);

module.exports = api;