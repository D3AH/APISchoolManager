const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const FamilySchema = new mongoose.Schema({
    father: {
        type: ObjectId,
        required: false
    },
    mother: {
        type: ObjectId,
        required: false
    },
    sons: [
        {
            type: ObjectId,
            required: false
        }
    ]
}, {
    // Localización: es, Intensidad de coincidencia 3
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('Family', FamilySchema);
