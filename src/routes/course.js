'use strict'

var express = require('express');
var CourseController = require('../controllers/course');

var api = express.Router();

/**
 * GET
 */
api.get('/', CourseController.listCourse);

/**
 * POST
 */
api.post('/', CourseController.saveCourse);

module.exports = api;