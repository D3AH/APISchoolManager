const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const CourseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'The field code is required.']
    },
    name: {
        type: String,
        require: [true, 'The field name is required!']
    },
    teachers: [
        {
            type: ObjectId,
            required: false
        }
    ]
}, {
    // Localización: es, Intensidad de coincidencia
    collation: { locale: 'es', strength: 3 }
});

module.exports = mongoose.model('Course', CourseSchema);


