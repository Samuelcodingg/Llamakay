const express = require('express');
const router = express.Router();

const { 
    signupEmpresaWithPostman, 
    signupEmpresa,
    signupAlumnoWithPostman,
    signupAlumno, 
    signinEmpresa, 
    signinAlumno, 
    getAlumnoById, 
    alumnoById, 
    empresaById,
    getEmpresaById,
    photoEmpresa,
    photoAlumno
} = require('../controllers/authController');

router.post('/signupEmpresaWithPostman', signupEmpresaWithPostman);
router.post('/signupEmpresa', signupEmpresa);
router.post('/signupAlumnoWithPostman', signupAlumnoWithPostman);
router.post('/signupAlumno', signupAlumno);
router.post('/signinEmpresa', signinEmpresa);
router.post('/signinAlumno', signinAlumno);
router.get('/alumnos/:alumnoId', getAlumnoById);
router.get('/empresas/:empresaId', getEmpresaById);
router.get('/empresas/photo/:empresaId', photoEmpresa);
router.get('/alumnos/photo/:alumnoId', photoAlumno);

router.param('empresaId', empresaById);
router.param('alumnoId', alumnoById);

module.exports = router;