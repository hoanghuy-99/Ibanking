const express = require('express');
const router = express.Router();

const TokenController = require('../controllers/token')

router.post('/', TokenController.apiCreateToken)

module.exports = router