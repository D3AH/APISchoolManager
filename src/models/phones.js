const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const PhoneSchema = new mongoose.Schema({
    person: {
        type: ObjectId,
        ref: 'Person',
        required: true
    },
    number: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    // Localización: es, Intensidad de coincidencia
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('Phone', PhoneSchema);
