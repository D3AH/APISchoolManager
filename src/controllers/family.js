'use strict'

const Family = require('../models/family');
const Person = require('../models/person');

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

/**
 * @TODO ARREGLAR ESTO! PLS
 */
function listNamesFamily(req, res){
    Family.findById(req.params.id ,(err, family) => {
        Person.find({}, (err, persons) => {
            let father = persons.find((person) => person._id.toString() == family.father);
            let mother = persons.find((person) => person._id.toString() == family.mother);

            res.status(200).send({
                father,
                mother,
                id: family._id
            });
        });
    })
    .catch((err) => {
        res.status(500).send({ message: err });
    });
}

module.exports = {
    saveFamily,
    addSon,
    listFamilies,
    listNamesFamily
}
