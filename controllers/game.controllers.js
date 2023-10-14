// Internal exports
const User = require('../models/Users');
const authUtils = require('../utils/auth.utils');
// External imports
const jwt = require('jsonwebtoken');

// method to win
exports.win = (req, res) => {
    const isValidToken = authUtils.protect(req);
    if (isValidToken === false) {
        return res.status(401).send('not authorized ');
    }
    const id = req.params.id;
    User.incrementPoints(id)
    res.status(200).send('Pointage mis à jour de l utlisateur');
}

// method to lost
exports.lost = (req, res) => {
    const isValidToken = authUtils.protect(req);
    if (isValidToken === false) {
        return res.status(401).send('not authorized ');
    }
    const id = req.params.id;
    User.decrementPoints(id);
    res.status(200).send('Pointage mis à jour de l utlisateur');
}