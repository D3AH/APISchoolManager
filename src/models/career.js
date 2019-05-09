const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const CarrerSchema = new mongoose.Schema({
    code: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    description: 
        {
            type: String,
            required: false
        }
});

module.exports = mongoose.model('Carrer', CarrerSchema);
