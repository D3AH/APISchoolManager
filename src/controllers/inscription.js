'use strict'

var Inscription = require('../models/inscription');

function saveInscription(req, res){
    var params = req.body;
    var inscription = new Inscription(params);
    inscription.save((err, inscriptionStored) => {
      if(err){
        res.status(500).send({ message: err });
        }else{
          if(!inscriptionStored){
            res.status(404).send({message: 'no se pudo registrar'});
            }else{
              res.status(200).send({phones: inscriptionStored});
            }
          }
      });
}  

function listInscription(req, res){
    Inscription.find({}, (err, inscriptionListed) => {
        if(err){
            res.status(500).send({message:err});
        }else{
            res.status(200).send({inscriptionListed});
        }
    })
}

module.exports = {
    saveInscription,
    listInscription
}