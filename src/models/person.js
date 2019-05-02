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
    gender: {
        type: String,
        required: [false, 'The field gender is required.']
    },
    department: {
        type: String,
        required: [false, 'The field department is required.']
    },
    municipality: {
        type: String,
        required: [false, 'The field municipality is required.']
    },
    zone: {
        type: String,
        required: [false, 'The field zone is required.']
    },
    neighborhood: {
        type: String,
        required: [false, 'The field neighborhood is required.']
    },
    avenue: {
        type: String,
        required: [false, 'The field avenue is required.']
    },
    street: {
        type: String,
        required: [false, 'The field street is required.']
    },
    area: {
        type: String,
        required: [false, 'The field area is required.']
    },
    houseNumber: {
        type: String,
        required: [false, 'The field houseNumber is required.']
    },
    mobileNumber: {
        type: String,
        required: [false, 'The field mobileNumber is required.']
    },
    housePhone: {
        type: String,
        required: [false, 'The field housePhone is required.']
    },
    another: {
        type: String,
        required: [false, 'The field another is required.']
    }
}, {
    // Localización: es, Intensidad de coincidencia
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('Person', PersonSchema);
