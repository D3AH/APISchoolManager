'use strict'

var express = require('express');
var TeacherController = require('../controllers/teacher');

var api = express.Router();

/**
 * GET
 */
api.get('/', TeacherController.listTeacher);

/**
 * POST
 */
api.post('/', TeacherController.saveTeacher);


module.exports = api;