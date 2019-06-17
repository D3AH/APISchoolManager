'use strict'

const RedEstudio = require('../models/redEstudio');
const Carrera = require('../models/career');

function saveRedEstudio(req, res){
    var params = req.body;
    var redEstudio = new RedEstudio(params);
    RedEstudio.findOne({$or: [{nombre:params.nombre}] }, (err, instruct) => {
        if(err){
            res.status(500).send({message: err});
        }else{
        if(params.nombre){
            if(!instruct){
                redEstudio.save((err, RedStored) => {
                    if(err){
                        res.status(500).send({message: err});
                    }else{
                        res.status(200).send({RedEstudio: RedStored});
                    }
                });
            }
            }else{
                res.status(200).send({message: 'Please add an red and career'});
                }
        
        }
});
}

function listred(req, res){
    RedEstudio.find({}, (err, list) => {
        res.status(200).send({ RedEstudio: list });
    }).catch((err) => {
        res.status(500).send({ message: err });
    });
}
module.exports = {
    saveRedEstudio,
    listred
}