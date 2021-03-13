const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user')

router.get('/:id', UserController.apiGetUserById)


module.exports = router