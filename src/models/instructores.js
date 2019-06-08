const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const InstructoresSchema = new mongoose.Schema({
    person: {
        type: ObjectId,
        ref: 'Person',
        required: true
    },
    codigo: {
        type: String,
        required: true
    },
    profesion: {
        type: String,
        required: true
    }
}, {
    // Localización: es, Intensidad de coincidencia
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('instructores', InstructoresSchema);