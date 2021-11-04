const express = require('express');
const router = express.Router();

const { signupEmpresa, signupAlumno } = require('../controllers/authController');

router.post('/signupEmpresa', signupEmpresa);
router.post('/signupAlumno', signupAlumno);

module.exports = router;