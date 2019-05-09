'use strict'

var express = require('express');
var AcademicUnityController = require('../controllers/academicUnity');

var api = express.Router();

api.post('/', AcademicUnityController.saveAcademicUnity);

api.get('/', AcademicUnityController.listAcademicUnity);

module.exports = api;