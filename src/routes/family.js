'use strict'

var express = require('express');
var FamilyController = require('../controllers/family');

var api = express.Router();

api.post('/', FamilyController.saveFamily);

api.put('/:id/addSon/:son', FamilyController.addSon);

api.get('/', FamilyController.listFamilies);

api.get('/:id/names', FamilyController.listNamesFamily);

module.exports = api;
