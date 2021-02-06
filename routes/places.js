const express = require('express');
const router = express.Router();
const placeController = require('../controllers/places');

router.get('/', placeController.getAllPlaces);

module.exports = router;