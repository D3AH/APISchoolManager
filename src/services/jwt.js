'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'secret_key';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    };
    return jwt.encode(payload, secret);
}