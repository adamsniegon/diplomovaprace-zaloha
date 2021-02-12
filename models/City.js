const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: {
        type: String
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
        }
    }
}, {
    timestamps: true,
    id: false
});

CitySchema.virtual('cityPlaces', {
    ref: 'places',
    localField: '_id',
    foreignField: 'cityReference'
 });
 
 CitySchema.set('toObject', { virtuals: true });
 CitySchema.set('toJSON', { virtuals: true });

module.exports = CitySchema;