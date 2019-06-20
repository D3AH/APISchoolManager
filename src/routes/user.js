'use strict';

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

/**
 * POST
 */
api.post('/', UserController.loginUser);

api.post('/user', UserController.signUp);

module.exports = api;
