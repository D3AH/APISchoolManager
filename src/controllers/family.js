'use strict'

var Family = require('../models/family');

function saveParents(req, res){
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
                res.status(200).send({message: 'Please add an foreman and son'})
            }
}

function saveSons(req, res){
    var id = req.params.id;
    var params = req.body;
    var son = { son: req.body };
    // { product: '12313123', number: 12 }

    Family.findById(id, (err, UpdateUser) => {
      UpdateUser.son.push(son);
      UpdateUser.save().then((productSaved) => {
        res.status(200).send({productSaved});
      }).catch((err) => res.status(500).send({ err }));
      
    });
}

function listFamilies(req, res){
    Family.find({}, (err, listFamilies) => {
        if(err){
            res.status(200).send({message:error});
        }else{
            res.status(200).send({listFamilies});
        }
    })
}

module.exports = {
    saveParents,
    saveSons,
    listFamilies
}