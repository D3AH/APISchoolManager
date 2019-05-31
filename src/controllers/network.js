'use strict'

var Network = require('../models/network');

function saveNetwork(req, res){
    var params = req.body;
    var network = new Network(params);

    Network.findOne({description:params.description}, (err, networks) => {
        if(err){
            res.status(500).send({message: err});
        }else{
            if(networks){
                res.status(500).send({message: 'We found some records'});
            }else{
                network.save((err, networkIssued) => {
                    if(err){
                        res.status(200).send({message:err});
                    }else{
                        res.status(200).send({networkIssued});
                    }
                });
            }
        }
    });    
}

function listNetwork(req, res){
    Network.find({}, (err, listNetworks) => {
        if(err){
            res.status(500).send({message: err});
        }else{
            res.status(200).send({listNetworks});
        }
    });
}

function addClasses(req, res){
    const { id, son } = req.params;

    Network.findById(id, (err, UpdateNetwork) => {
      UpdateNetwork.classes.push(son);
      UpdateNetwork.save().then((networkSaved) => {
        res.status(200).send({networkSaved});
      }).catch((err) => res.status(500).send({ err }));
    });
}

function searchClasses(req, res){
    const id = req.params;

    Network.findById(id, (err, searchNetwork) => {
        if(err){
            res.status(500).send({message:err});
        }else{
            res.status(200).send({searchNetwork});
        }
    })
}

module.exports = {
    saveNetwork,
    listNetwork,
    addClasses,
    searchClasses
}