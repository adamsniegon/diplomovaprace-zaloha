const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    adress: {
        type: String,
        required: [true, "Please add an adress"]
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
        },
        formattedAdress: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = PlaceSchema;