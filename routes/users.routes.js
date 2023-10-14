const express = require('express');
const router = express.Router();



const usersControllers = require('../controllers/users.controllers');


router.get('/', usersControllers.getAllUsers);
router.put('/:id', usersControllers.UpdateUser);
router.delete('/:id', usersControllers.deleteUser);





module.exports = router;