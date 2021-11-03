const express = require('express');
const router = express.Router();

const { signupEmpresa } = require('../controllers/authController');

router.post('/signupEmpresa', signupEmpresa);

module.exports = router;