'use strict';

/**
 * User controller
 * @module controller/user
 */

const User = require('../models/user');

const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');


/**
 * Login user and return a token or the user logged.
 *
 * @param {Object} req The request
 * @param {Object} res The response
 */

function loginUser(req, res) {
    var params = req.body;
    var email = params.email;
    var password = params.password;

    User.findOne({ email: email }, (err, user) => {
        if(user) {
            bcrypt.compare(password, user.password, (err, check) => {
                if(check) {
                    res.status(500).send(user);
                } else {
                    res.status(500).send({ message: 'Incorrect authentication.' });
                }
            });
        } else {
            res.status(500).send({ message: 'User not exist.' });
        }
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

/**
 * Adds a user.
 *
 * @param      {Object}  req     The request
 * @param      {Object}  res     The response
 * @return     {Object}  Status error message || user saved.
 */

function signUp(req, res) {
    var tempUser = new User(req.body);
    tempUser.role = 'ROLE_CLIENT';
    var validate = tempUser.validateSync();

    if(!validate) {
        User.find({ email: tempUser.email }, (err, users) => {
            users && users.length ? res.status(500).send({ message: 'There is already a user with that email.' }) : bcrypt.hash(tempUser.password, null, null, (error, hash) => {
                tempUser.password = hash;
                tempUser
                    .save()
                    .then((userSaved) => {
                        userSaved ? res.status(200).send({ user: userSaved }) : res.status(400).send({ message: 'Unexpected error.' });
                    })
                    .catch((err) => res.status(500).send({ err }));
            });
        });
    } else {
        res.status(400).send({ message: validate.message });
    }
}

module.exports = {
    loginUser,
    signUp
}