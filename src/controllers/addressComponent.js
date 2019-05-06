'use strict'

var AddressComponent = require('../models/addressComponent');

function saveAddressComponent(req, res) {
    var params = req.body;
    var addressComponent = new AddressComponent(params);

    addressComponent.save((err, saveAddress) => {
        if(err){
            res.status(500).send({ message: err });
        }else{
            res.status(200).send({ address: saveAddress });
        }
    })
}

function listAddressComponets(req, res) {
    AddressComponent.find({}, (err, addressComponents) => {
        if(err){
            res.status(200).send({ message: err });
        }else{
            res.status(200).send({ addressComponents });
        }
    })
}

module.exports = {
    saveAddressComponent,
    listAddressComponets
}