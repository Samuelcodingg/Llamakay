const express = require('express');
const router = express.Router();

const { 
    signupEmpresa, 
    signupAlumno, 
    signinEmpresa, 
    signinAlumno, 
    getAlumnoById, 
    alumnoById 
} = require('../controllers/authController');

router.post('/signupEmpresa', signupEmpresa);
router.post('/signupAlumno', signupAlumno);
router.post('/signinEmpresa', signinEmpresa);
router.post('/signinAlumno', signinAlumno);
router.get('/alumnos/:alumnoId', getAlumnoById);

router.param('alumnoId', alumnoById);

module.exports = router;