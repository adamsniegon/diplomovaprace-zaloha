const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/cities');

router.get('/', reviewController.getAllReviews);
router.get('/:id', reviewController.getCity);

module.exports = router;