'use strict'

var express = require('express');
var RedEstudioComponent = require('../controllers/redEstudio');

var api = express.Router();

api.post('/', RedEstudioComponent.saveRedEstudio);
api.get('/', RedEstudioComponent.listred);


module.exports = api;