'use strict'

var Address = require('../models/address');

function saveAddress(req, res){
    var params = req.body;
    let address = new Address(params);

    address.save((err, saveAddress) => {
        if(err){
            res.status(500).send({ message: err });
            console.log(err);
        }else{
            res.status(200).send({ address: saveAddress });
        }
    })
}

module.exports = {
    saveAddress
}