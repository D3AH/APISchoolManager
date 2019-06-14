const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const InscriptionSchema = new mongoose.Schema({
    student: {
        type: ObjectId,
        required: false
    },
    academicUnity: {
        type: ObjectId,
        required: false
    },
    grade: {
        type: String,
        required: false
    },
    fee: 
    {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('InscriptionSchema', InscriptionSchema);