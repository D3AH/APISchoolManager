'use strict'

var express = require('express');
var DayTimeController = require('../controllers/daytime');

var api = express.Router();

/**
 * GET
 */
api.get('/', DayTimeController.listDaytime);

/**
 * POST
 */
api.post('/', DayTimeController.saveDaytime);

module.exports = api;