const mongoose = require('mongoose');

const ObjectId = mongoose.SchemaType.ObjectId;

const AddressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name is required.']
    },
    type: {
        type: String,
        required: [true, 'The type is required (string, integer).']
    }
}, {
        // Localización: es, Intensidad de coincidencia
        collation: { locale: 'es', strength: 3 }
    });

module.exports = mongoose.model('Address', AddressSchema);

/**
 * addresComponent
 * @TODO documentar esto.
 * 
 * Algunos posibles campos.
 * department: {
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
    }
 */
