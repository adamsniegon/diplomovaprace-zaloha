const express = require('express');
const router = express.Router();
const placeController = require('../controllers/places');

router.get('/', placeController.getAllPlaces);
router.get('/:id', placeController.getPlaceReviews);

module.exports = router;