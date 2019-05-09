'use strict'

var Career = require('../models/career');

function saveCareer(req, res){
    var params = req.body;
    var career = new Career(params);
    career.save((err, careerStored) => {
      if(err){
        res.status(500).send({ message: err });
        }else{
          if(!careerStored){
            res.status(404).send({message: 'no se pudo registrar la carrera'});
            }else{
              res.status(200).send({career: careerStored});
            }
          }
      });
}

function listCareers(req, res){
    Career.find({}, (err, career) => {
      if (err){
        console.log(err);
        res.status(500).send({message: 'no se han podido listar las carreras'})
      }else{
        res.status(200).send({career});
      }
    });
  }

module.exports = {
    saveCareer,
    listCareers
}