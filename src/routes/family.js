'use strict'

var express = require('express');
var FamilyController = require('../controllers/family');

var api = express.Router();

api.post('/saveFamily', FamilyController.saveParents);

api.put('/saveSons/:id', FamilyController.saveSons);

api.get('/listFamilies', FamilyController.listFamilies);
module.exports = api;