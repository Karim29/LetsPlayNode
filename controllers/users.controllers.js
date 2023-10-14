// Internal imports
const User = require('../models/Users');
const authUtils = require('../utils/auth.utils')

// Method to show all users
exports.getAllUsers = (req, res) => {
    if (isValidToken === false) {
        return res.status(401).send('not authorized ');
    }
    const users = User.showuser();
    res.status(200).send(users);
}

// Method to update user
exports.UpdateUser = (req, res) => {
    const isValidToken = authUtils.protect(req);
    if (isValidToken === false) {
        return res.status(401).send('not authorized ');
    }
    const id = req.params.id;
    const email = req.body.email;
    // check if email already used
    let user = User.findByEmail(email);
    if (user !== null) {
        return res.status(409).send('email already exists');
    }
    // check is user exists
    const lsuser = User.findById(id);
    if (lsuser === false) {
        return res.status(404).send('user not found');
    }
    User.updateUser(id, req.body);
    res.status(200).send(" Utlisateur modifié");
}

// Method to delete user
exports.deleteUser = (req, res) => {
    const isValidToken = authUtils.protect(req);
    if (isValidToken === false) {
        return res.status(401).send('not authorized ');
    }
    const id = req.params.id;
    const user = User.findById(parseInt(id));
    if (user === false) {
        return res.status(404).send('user not found');
    }
    User.deleteUser(id);
    res.send("Utilisateur supprimé avec succès");
}