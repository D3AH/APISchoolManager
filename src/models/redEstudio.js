const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const RedEstudioSchema = new mongoose.Schema({
    career: 
    {
        type: ObjectId,
        required: false
    },
    nombre: {
        type: String,
        require: [true, 'The field name is required!']
    },
    course: [
        {
            type: ObjectId,
            required: false
        }
    ]
}, {
    // Localización: es, Intensidad de coincidencia 3
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('RedEstudio', RedEstudioSchema);