// Internal imports
const User = require('../models/Users');
const authUtils = require('../utils/auth.utils');
// External imports
const jwt = require('jsonwebtoken');

// Method to login
exports.login = (req, res) => {

    // Get email and password from request body  
    const email = req.body.email;
    const password = req.body.password;

    // Check if email and password are not empty
    if (email === undefined || email.trim() === '') {
        return res.status(400).send('email is required');
    }
    if (password === undefined || password.trim() === '') {
        return res.status(400).send('password is required');
    }
    // Check if user exists by email
    const user = User.findByEmail(email);
    if (user === null) {
        return res.status(401).send('user not found');
    }
    // Check if password is correct
    if (user.password !== password) {
        return res.status(401).send('password is incorrect');
    }
    // Generate token
    const token = jwt.sign({ 'id': user.id }, 'onepiece');
    res.status(200).send(token);
}

// Method to register
exports.register = (req, res) => {
    // Get email and password from request body
    const email = req.body.email;
    const password = req.body.password;
    // Check if email and password are not empty
    if (email === undefined || email.trim() === '') {
        return res.status(400).send('email is required');
    }
    if (password === undefined || password.trim() === '') {
        return res.status(400).send('password is required');
    }
    // Check if user exists by email
    const user = User.findByEmail(email);
    if (user !== null) {
        return res.status(409).send('email already exists');
    }

    // Get parameters from request body and create user
    User.create(req.body);
    // Generate token
    const token = jwt.sign({ 'id': user.id }, 'onepiece');
    res.status(201).send(token);
}
