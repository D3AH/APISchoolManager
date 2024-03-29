const mongoose = require('mongoose');

const AcademicUnitySchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: [false, 'The field description is required.']
    }
}, {
    // Localización: es, Intensidad de coincidencia
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('AcademicUnity', AcademicUnitySchema);


