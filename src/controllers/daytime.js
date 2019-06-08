'use strict'

var Daytime = require('../models/daytime');

function saveDaytime(req, res){
    var params = req.body;
    var daytime = new Daytime(params);
    Daytime.findOne({$or: [{section:params.section.daytime}]}, (err, instruct) => {
      if(err){
          res.status(500).send({message: err});
      }else{
          if(!instruct){
    daytime.save((err, daytimeStored) => {
      if(err){
        res.status(500).send({ message: err });
        }else{
          if(!daytimeStored){
            res.status(404).send({message: 'no se pudo registrar'});
            }else{
              res.status(200).send({phones: daytimeStored});
            }
          }
      });
    } else {
      res.status(404).send({ message: 'Ya existe!' });
    }
  }
});
}  

function listDaytime(req, res){
    Daytime.find({}, (err, daytimeListed) => {
        if(err){
            res.status(500).send({message:err});
        }else{
            res.status(200).send({daytimeListed});
        }
    })
}

module.exports = {
    saveDaytime,
    listDaytime
}