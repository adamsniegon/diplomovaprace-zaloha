const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const axios = require('axios');

const ReviewSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: mongoose.Decimal128,
        default: 0
    },
    placeReference: {
        type: Schema.Types.ObjectId,
        ref: 'reviews'
    }
}, {
    timestamps: true
});

module.exports = ReviewSchema;