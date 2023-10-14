// internal imports
const User = require('../models/Users');
const authUtils = require('../utils/auth.utils');
// external imports
const jwt = require('jsonwebtoken');

exports.getme = (req, res) => {
    const isValidToken = authUtils.protect(req);
    if (isValidToken === false) {
        return res.status(401).send('not authorized ');
    }
    const id = req.params.id;
    const user = User.showme(id);
    res.status(200).send(user);
}

exports.updateMe = (req, res) => {
    const isValidToken = authUtils.protect(req);
    if (isValidToken === false) {
        return res.status(401).send('not authorized ');
    }
    const id = req.params.id;
    const email = req.body.email;
    // check if email already used
    const user = User.findByEmail(email);
    if (user !== null) {
        return res.status(409).send('email already exists');
    }
    User.updateMe(id, req.body);
    res.status(200).send(" Utlisateur modifié");
}
// Method to delete me
exports.deleteMe = (req, res) => {
    const isValidToken = authUtils.protect(req);
    if (isValidToken === false) {
        return res.status(401).send('not authorized ');
    }
    const id = req.params.id;
    User.deleteMe(id);
    res.status(204).send("Utilisateur supprimé avec succès");
}

// Method to reset score
exports.resetScore = (req, res) => {
    const isValidToken = authUtils.protect(req);
    if (isValidToken === false) {
        return res.status(401).send('not authorized ');
    }
    const id = req.params.id;
    User.resetScore(id);
    res.status(200).send("Score réinitialisé");
}