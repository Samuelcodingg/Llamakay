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

exports.signinEmpresa = (req, res) => {
    const { correo_empresa, password } = req.body;
    Empresa.findOne({ correo_empresa }, (error, empresa) => {
        if(error || !empresa) {
            return res.status(401).json({
                error: "Empresa not found"
            });
        }
        if(!empresa.authenticate(password)) {
            return res.status(401).json({
                error: "Password is incorrect"
            });
        }
        const token = jwt.sign({
            _id: empresa._id
        }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
        res.cookie('t', token, { expire: new Date() + 9999 });
        const { _id, nombre_empresa, correo_empresa } = empresa;
        return res.json({ token, empresa: { _id, nombre_empresa, correo_empresa } });
    });
}

exports.signinAlumno = (req, res) => {
    const { correo_alumno, password } = req.body;
    Alumno.findOne({ correo_alumno }, (error, alumno) => {
        if(error || !alumno) {
            return res.status(401).json({
                error: "Alumno not found"
            });
        }
        if(!alumno.authenticate(password)) {
            return res.status(401).json({
                error: "Password is incorrect"
            });
        }
        const token = jwt.sign({
            _id: alumno._id
        }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
        res.cookie('t', token, { expire: new Date() + 9999 });
        const { _id, nombre_alumno, correo_alumno } = alumno;
        return res.json({ token, alumno: { _id, nombre_alumno, correo_alumno } });
    });
}