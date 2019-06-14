'use strict'

var express = require('express');
var InscriptionController = require('../controllers/inscription');

var api = express.Router();

/**
 * GET
 */
api.get('/', InscriptionController.listInscription);

/**
 * POST
 */
api.post('/', InscriptionController.saveInscription);

module.exports = api;