'use strict'

var express = require('express');
var CourseController = require('../controllers/course');

var api = express.Router();

api.post('/', CourseController.saveCourse);

api.get('/', CourseController.listCourse);

module.exports = api;