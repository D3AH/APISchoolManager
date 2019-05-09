'use strict'

var Course = require('../models/course');

function saveCourse(req, res){
    var params = req.body;
    var course = new Course(params);

    course.save((err, saveCourse) => {
        if(err){
            res.status(500).send({message: err});
        }else{
            res.status(200).send({course: saveCourse});
        }
    });
}

function listCourse(req, res){
    Course.find((err, listCourse) => {
        if(err){
            res.status(500).send({message: err});
        }else{
            res.status(200).send({Course: listCourse});
        }
    })
}

module.exports = {
    saveCourse,
    listCourse
}