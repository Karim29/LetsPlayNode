const express = require('express');
const router = express.Router();
const meController = require('../controllers/me.controllers');


router.get('/me', meController.getme);
router.put('/me', meController.updateMe);
router.delete('/me', meController.deleteMe);
router.put('/me/reset-score', meController.resetScore);


module.exports = router;