'use strict'

var express = require('express');
var InstructoresComponent = require('../controllers/instructores');

var api = express.Router();

api.post('/', InstructoresComponent.saveInstructores);

api.get('/', InstructoresComponent.listInstructores);

module.exports = api;