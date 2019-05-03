const mongoose = require('mongoose');

const ObjectId = mongoose.SchemaType.ObjectId;

const AddressSchema = new mongoose.Schema({
    person: {
        type: ObjectId,
        ref: 'Person',
        required: [true, 'The person field is required.']
    },
    description: {
        type: String,
        required: false
    },
    components: [
        {
            addressComponent: {
                type: ObjectId,
                ref: 'The addressComponent field is required.',
                required: [true, '']
            },
            value: {
                type: String,
                required: [true, 'The value is required.']
            }
        }
    ]
}, {
        // Localización: es, Intensidad de coincidencia
        collation: { locale: 'es', strength: 3 }
    });

module.exports = mongoose.model('Address', AddressSchema);
