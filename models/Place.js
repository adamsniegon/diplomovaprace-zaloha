const mongoose = require('mongoose');
const geocoder = require('../helpers/geocoder');

const PlaceSchema = new mongoose.Schema({
    address: {
        type: String,
        required: [true, "Please add an adress"]
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAdress: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

/**
 * Geocode location
 */
PlaceSchema.pre('save', async function(next) {
    const loc = await geocoder.geocode(this.address);
    console.log(loc);
});

module.exports = PlaceSchema;