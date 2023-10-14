const express = require('express');
const router = express.Router();

// Internal imports
const gameController = require('../controllers/game.controllers');

router.put('/win/:id', gameController.win);
router.put('/lost/:id', gameController.lost);

module.exports = router;