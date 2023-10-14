//External imports
const express = require('express');

// Variables
const router = express.Router();


//Internal imports
const authControllers = require('../controllers/auth.controllers');

//Routes
router.post('/login', authControllers.login);
router.post('/register', authControllers.register);






//Export
module.exports = router;