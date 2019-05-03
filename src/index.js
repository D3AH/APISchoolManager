'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 4022;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/SchoolManager', { useNewUrlParser: true })
.then((err,res)=>{
    console.log('Swited to Database Engine');
    app.listen(port, () =>{
        console.log('Node and Express services are working');
    });
})

.catch(err => (console.log(err)));