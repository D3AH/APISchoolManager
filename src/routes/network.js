'use strict'

var express = require('express');
var NetworkController = require('../controllers/network');

var api = express.Router();

/**
 * GET
 */
api.get('/', NetworkController.listNetwork);



api.get('/:id', NetworkController.searchClasses);

/**
 * POST
 */
api.post('/', NetworkController.saveNetwork);

/** 
 * ARRAY
*/

api.put('/:id/addNetwork/:son', NetworkController.addClasses);

module.exports = api;