const mongoose = require('mongoose');
const geocoder = require('../helpers/geocoder');

const PlaceSchema = new mongoose.Schema({
    address: {
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
            city: String,
            country: String,
            zipcode: String
        },
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
    this.location = {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [loc[0].latitude, loc[0].longitude]
        },
        properties: {
            streetName: loc[0].streetName,
            streetNumber: loc[0].streetNumber,
            city: loc[0].city,
            country: loc[0].country,
            zipcode: loc[0].zipcode
        }
    };
    this.address = undefined;
    next();
});

module.exports = PlaceSchema;