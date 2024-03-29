'use strict'

var Person = require('../models/person');

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
        const { firstName, secondName, firstSurname } = req.query;
        Person.find({
          $or: [
            { 'firstName': firstName },
            { 'secondName': secondName },
            { 'firstSurname': firstSurname }
          ]
        }, (err, results)=>{
          if(err){
            res.status(404).send({ message: err })
          }else{
            if(!results){
              res.status(200).send({message: 'No hay registros'});
            }else{
              res.status(200).send(results);
            }
          }
        });
      }
//

      function getPerson(req, res){
        var idPerson = req.params.id;

        Person.find({_id:idPerson}, (err, idPerson) => {
          if (err){
            console.log(err);
            res.status(500).send({message: 'no se a podido mostrar a la persona'})
          }else{
            res.status(200).send({idPerson});
          }
        });
      }
      

module.exports = {
    checkPerson,
    savePerson,
    listPerson,
    searchPerson,
    getPerson
}