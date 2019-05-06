const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [false, 'The field firstName is required.']
    },
    secondName: {
        type: String,
        required: [false, 'The field secondName is required.']
    },
    firstSurname: {
        type: String,
        required: [false, 'The field firstSurname is required.']
    },
    lastSurname: {
        type: String,
        required: [false, 'The field lastSurname is required.']
    },
    marriedname: {
        type: String,
        required: [false, 'The field Marriedname is required.']
    },
    birthdate: {
        type: String,
        required: [false, 'The field birthdate is required.']
    },
    religion: {
        type: String,
        required: [false, 'The field religion is required.']
    },
    email: {
        type: String,
        required: [false, 'The field email is required.']
    },
    sex: {
        type: String,
        required: [false, 'The field sex is required.']
    },
    civilStatus: {
        type: String,
        required: [false, 'The field civilStatus is required.']
    }
}, {
    // Localización: es, Intensidad de coincidencia
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('Person', PersonSchema);
