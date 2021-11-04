const Empresa = require('../models/Empresa');
const Alumno = require('../models/Alumno');
const jwt = require('jsonwebtoken');

exports.signupEmpresa = (req, res) => {
    console.log('req.body', req.body);
    const empresa = new Empresa(req.body);
    empresa.save((error, empresa) => {
        console.log('Reached signup endpoint');
        if(error) {
            return res.status(400).json({
                error: "Please check fields, there was an Error"
            });
        }
        empresa.salt = undefined;
        empresa.psw_empresa = undefined;
        res.json({
            empresa
        })
    })
}

exports.signupAlumno = (req, res) => {
    console.log('req.body', req.body);
    const alumno = new Alumno(req.body);
    alumno.save((error, alumno) => {
        console.log('Reached signup endpoint');
        if(error) {
            return res.status(400).json({
                error: "Please check fields, there was an Error"
            });
        }
        alumno.salt = undefined;
        alumno.psw_alumno = undefined;
        res.json({
            alumno
        })
    })
}