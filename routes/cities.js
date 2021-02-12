const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cities');

router.get('/', cityController.getAllCities);
router.post('/', cityController.addCity);

module.exports = router;