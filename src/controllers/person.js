'use strict'

var Person = require('../models/person');
var auth = require('../middlewares/authenticated');
var jwt = require('../services/jwt');

function checkPerson(req, res){
    res.status(200).send({message:'Open it up'});
}

function savePerson(req, res){
  var params = req.body;
  var person = new Person(params);
      person.save((err, personStored) => {
        if(err){
          res.status(500).send({ message: err });
          }else{
            if(!personStored){
              res.status(404).send({message: 'no se pudo registrar el usuario'});
              }else{
                res.status(200).send({person: personStored});
              }
            }
        });
  }
  
      

      function listPerson(req, res){
        Person.find({}, (err, persons) => {
          if (err){
            console.log(err);
            res.status(500).send({message: 'no se a podido listar'})
          }else{
            res.status(200).send({persons});
          }
        });
      }


      function searchPerson(req, res){
        var params = req.query;
        Person.find({
          $or: [
            {firstName: params },
            {secondName: params},
            {firstSurname: params}
          ]
        }, (err, results)=>{
          if(err){
            res.status(404).send({message: 'Error general'})
          }else{
            if(!results){
              res.status(200).send({message: 'No hay registros'});
            }else{
              res.status(200).send({results});
            }
          }
        });
      }

module.exports = {
    checkPerson,
    savePerson,
    listPerson,
    searchPerson
}