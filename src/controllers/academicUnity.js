'use strict'

var AcademicUnity = require('../models/academicUnity');

function saveAcademicUnity(req, res){
    var params = req.body;
    var academicUnity = new AcademicUnity(params);

    if(!params.description){
        res.status(500).send({message:'Please add a description on this module!'})
    }else{
        academicUnity.save((err, UnityStored) => {
            if(err){
                res.status(500).send({message: err});
            }else{
                res.status(200).send({academicUnity: UnityStored});
            }
        })
    }
}

function listAcademicUnity(req, res){
    AcademicUnity.find((err, listAcademy) =>{
        if(err){
            res.status(500).send({message: err});
        }else{
            res.status(200).send({AcademicUnity: listAcademy})
        }
    });
}

module.exports = {
    saveAcademicUnity,
    listAcademicUnity
}