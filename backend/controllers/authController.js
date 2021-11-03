const Empresa = require('../models/Empresa');
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