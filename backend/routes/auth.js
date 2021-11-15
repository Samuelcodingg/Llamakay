const express = require('express');
const router = express.Router();

const { signupEmpresa, signupAlumno, signinEmpresa, signinAlumno } = require('../controllers/authController');

router.post('/signupEmpresa', signupEmpresa);
router.post('/signupAlumno', signupAlumno);
router.post('/signinEmpresa', signinEmpresa);
router.post('/signinAlumno', signinAlumno);

module.exports = router;