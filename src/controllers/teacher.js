'use strict'

var Teacher = require('../models/teacher');

function saveTeacher(req, res){
    var params = req.body;
    var teacher = new Teacher(params);

    Teacher.findOne({personalData:params.personalData}, (err, teacherIssued) => {
        if(err){
            res.status(500).send({message:err});
        }else{
            if(teacherIssued){
                res.status(500).send({message: 'You cannot add this theacher'});
            }else{
                teacher.save((err, teacherSaved) => {
                    if(err){
                        res.status(500).send({message:err});
                    }else{
                        res.status(200).send({teacherSaved});
                    }
                })
            }
        }
    })
}  

function listTeacher(req, res){
    Teacher.find({}, (err, teacherListed) => {
        if(err){
            res.status(500).send({message:err});
        }else{
            res.status(200).send({teacherListed});
        }
    })
}

module.exports = {
    saveTeacher,
    listTeacher
}