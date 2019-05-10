'use strict'

var express = require('express');
var AcademicUnityController = require('../controllers/academicUnity');

var api = express.Router();

api.post('/', AcademicUnityController.saveAcademicUnity);

module.exports = api;