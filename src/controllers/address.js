'use strict'

var Address = require('../models/address');

function saveAddress(req, res){
    var params = req.body;
    var address = new Address(params);

    address.save((err, saveAddress) => {
        if(err){
            res.status(500).send({message:'Internal error'});
            console.log(err);
        }else{
            res.status(200).send({address:saveAddress});
        }
    })
}

module.exports = {
    saveAddress
}