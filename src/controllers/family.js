'use strict'

var Family = require('../models/family');

function saveFamily(req, res){
    var params = req.body;
    var family = new Family(params);

    if(params.father || params.mother || params.foreman){
        family.save((err, familyStored) => {
            if(err){
                res.status(500).send({message: err});
            }else{
                res.status(200).send({family: familyStored});
            }
        });
    }else{
        res.status(200).send({message: 'Please add an foreman and son'});
    }
}

function addSon(req, res){
    const { id, son } = req.params;

    Family.findById(id, (err, UpdateFamily) => {
      UpdateFamily.sons.push(son);
      UpdateFamily.save().then((familySaved) => {
        res.status(200).send({familySaved});
      }).catch((err) => res.status(500).send({ err }));
    });
}

function listFamilies(req, res){
    Family.find({}, (err, listFamilies) => {
        res.status(200).send({ families: listFamilies });
    }).catch((err) => {
        res.status(500).send({ message: err });
    });
}

module.exports = {
    saveFamily,
    addSon,
    listFamilies
}
