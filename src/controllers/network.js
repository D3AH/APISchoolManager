'use strict'

var Network = require('../models/network');

function saveNetwork(req, res){
    const { career, dateStart, dateEnd } = req.body;
    var network = new Network(req.body);

    Network.findOne({
        $or: [
            // @TODO fix this.pls
            // { career: career },
            { dateStart: dateStart },
            { dateEnd: dateEnd }
        ]}, (err, networks) => {
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
    const { id, course } = req.params;

    Network.findById(id, (err, UpdateNetwork) => {
      UpdateNetwork.classes.push(course);
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