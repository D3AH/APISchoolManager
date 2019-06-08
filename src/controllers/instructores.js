'use strict'

var Instructores = require('../models/instructores');

function saveInstructores(req, res){
    var params = req.body;
    var instructores = new Instructores(params);
    Instructores.findOne({$or: [{codigo:params.codigo},  {person:params.person}] }, (err, instruct) => {
        if(err){
            res.status(500).send({message: err});
        }else{
            if(!instruct){
                instructores.save((err, instructoresStored) => {
                    if(err){
                    res.status(500).send({ message: err });
                    }else{
                    if(!instructoresStored){
                        res.status(404).send({message: 'no se pudo registrar el usuario'});
                        }else{
                        res.status(200).send({Instructores: instructoresStored});
                        }
                    }
                });
            }
        }
    });
}

    function listInstructores(req, res){
        Instructores.find({}, (err, instructores) => {
          if (err){
            console.log(err);
            res.status(500).send({message: 'no se han podido listar los numeros telefonicos'})
          }else{
            res.status(200).send({instructores});
          }
        });
      }

      function listNamesInstructor(req, res){
        Instructores.findById(req.params.id ,(err, instructores) => {
            Person.find({}, (err, persons) => {
                let instructor = persons.find((person) => person._id.toString() == instructores.instructor);
    
                res.status(200).send({
                    instructor,
                    id: instructores._id
                });
            });
        })
        .catch((err) => {
            res.status(500).send({ message: err });
        });
    }

    module.exports = {
        saveInstructores,
        listInstructores,
        listNamesInstructor
    }
         