const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const axios = require('axios');

const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Feature']
        },
        geometry: {
            type: {
                type: String,
                enum: ['Point']
            },
            coordinates: {
                type: [Number]
            },
        },
        properties: {
            streetName: String,
            streetNumber: String,
            city: String
        },
    },
    cityReference: {
        type: Schema.Types.ObjectId,
        ref: 'places'
    }
}, {
    timestamps: true
});

module.exports = PlaceSchema;