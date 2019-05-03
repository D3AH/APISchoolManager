'use strict'

var Phones = require('../models/phones');

function savePhones(req, res){
    var params = req.body;
    var phones = new Phones(params);
        phones.save((err, phonesStored) => {
          if(err){
            res.status(500).send({ message: err });
            }else{
              if(!phonesStored){
                res.status(404).send({message: 'no se pudo registrar el numero telefonico'});
                }else{
                  res.status(200).send({phones: phonesStored});
                }
              }
          });
    }

    function listPhones(req, res){
        Phones.find({}, (err, phones) => {
          if (err){
            console.log(err);
            res.status(500).send({message: 'no se han podido listar los numeros telefonicos'})
          }else{
            res.status(200).send({phones});
          }
        });
      }

    module.exports = {
        savePhones,
        listPhones
    }