const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const NetworkSchema = new mongoose.Schema({
    career: {
        type: ObjectId,
        required: true
    },
    courses: [
        {
            type: ObjectId,
            required: false
        }
    ],
    description:{
        type: String,
        required: false
    },
    dateStart: {
        type: String,
        required: false
    },
    dateEnd: {
        type: String,
        required: false
    }
}, {
    // Localización: es, Intensidad de coincidencia 3
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('Network', NetworkSchema);
