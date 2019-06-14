'use strict'

var Course = require('../models/course');

function saveCourse(req, res){
    var params = req.body;
    var course = new Course(params);

    Course.findOne({$or: [{code:params.code},  {name:params.name}] }, (err, courseFound) => {
        if(err){
            res.status(500).send({message: err});
        }else{
            if(!courseFound){
                course.save((err, saveCourse) => {
                    if(err){
                        res.status(500).send({message: err});
                    }else{
                        res.status(200).send({course: saveCourse});
                    }
                }); 
               
            }else{
                res.status(500).send({
                    message: 'The course you are trying to add is on the system already!'
                }); 
            }       
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

function addTeacher(req, res) {
    const { id, teacher } = req.params;

    Course.findById(id, (err, UpdateCourse) => {
        UpdateCourse.teachers.push(teacher);
        UpdateCourse.save().then((CourseSaved) => {
            res.status(200).send({CourseSaved});
        });
    });
}

module.exports = {
    saveCourse,
    listCourse,
    addTeacher
}