'use strict'

var AddressComponent = require('../models/addressComponent');

function saveAddress(req, res){
    var params = req.body;
    var addressComponent = new AddressComponent(params);

    addressComponent.save((err, saveAddress) => {
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