const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const TeacherSchema = new mongoose.Schema({
    code: {
        type: String,
        required: false
    },
    personalData: {
        type: ObjectId,
        required: false
    },
    profession: {
        type: String,
        required: false
    }
}, {
    // Localización: es, Intensidad de coincidencia 3
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('Teacher', TeacherSchema);
