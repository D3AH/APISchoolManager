const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const InscriptionSchema = new mongoose.Schema({
    person: {
        type: ObjectId,
        ref: 'Person',
        required: false
    },
    academicUnity: {
        type: ObjectId,
        ref: 'AcademicUnity',
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