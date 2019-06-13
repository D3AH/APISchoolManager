const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const DaytimeSchema = new mongoose.Schema({
    career: {
        type: ObjectId,
        required: false
    },
    daytime: {
        type: String,
        required: false
    },
    section: 
    {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('DaytimeSchema', DaytimeSchema);