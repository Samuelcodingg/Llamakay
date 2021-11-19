const Empresa = require('../models/Empresa');
const Alumno = require('../models/Alumno');
const jwt = require('jsonwebtoken');
const formidable = require('formidable');
const fs = require('fs');
const _ = require('lodash');

exports.signupEmpresaWithPostman = (req, res) => {
    let form = new formidable.IncomingForm();

    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {

        if (err) {
            return res.status(400).json({
                error: 'Error al subir la imagen'
            });
        }
        let empresa = new Empresa(fields);

        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'La imagen es muy grande'
                });
            }
            console.log(files.photo);
            empresa.photo.data = fs.readFileSync(files.photo.filepath);
            empresa.photo.contentType = files.photo.type;
        }

        empresa.save((err, empresa) => {
            if (err) {
                return res.status(400).json({
                    error: 'Error al crear la empresa'
                });
            }
            empresa.salt = undefined;
            empresa.psw_empresa = undefined;
            res.json({ empresa });
        });
    });
}

exports.signupEmpresa = (req, res) => {
    const empresa = new Empresa(req.body);
    empresa.save((error, empresa) => {
        if (error) {
            return res.status(400).json({
                error: 'Error al crear la empresa'
            });
        }
        empresa.salt = undefined;
        empresa.psw_empresa = undefined;
        res.json({ empresa });
    });
}

exports.signupAlumnoWithPostman = (req, res) => {
    let form = new formidable.IncomingForm();

    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {

        if (err) {
            return res.status(400).json({
                error: 'Error al subir la imagen'
            });
        }
        let alumno = new Alumno(fields);

        if (files.photo) {
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'La imagen es muy grande'
                });
            }
            console.log(files.photo);
            alumno.photo.data = fs.readFileSync(files.photo.filepath);
            alumno.photo.contentType = files.photo.type;
        }

        alumno.save((err, alumno) => {
            if (err) {
                return res.status(400).json({
                    error: 'Error al crear el alumno'
                });
            }
            alumno.salt = undefined;
            alumno.psw_alumno = undefined;
            res.json({ alumno });
        });
    });
}


exports.signupAlumno = (req, res) => {
    console.log('req.body', req.body);
    const alumno = new Alumno(req.body);
    alumno.save((error, alumno) => {
        console.log('Reached signup endpoint');
        if (error) {
            return res.status(400).json({
                error: "Por favor revise campos, hubo un error"
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
    const { correo, password } = req.body;
    Empresa.findOne({ correo }, (error, empresa) => {
        if (error || !empresa) {
            return res.status(401).json({
                error: "Empresa not found"
            });
        }
        if (!empresa.authenticate(password)) {
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
        const { _id, nombre, correo, descripcion, linkedin, facebook, twitter } = empresa;
        return res.json({ token, empresa: { _id, nombre, correo, descripcion, linkedin, facebook, twitter } });
    });
}

exports.signinAlumno = (req, res) => {
    const { correo, password } = req.body;
    Alumno.findOne({ correo }, (error, alumno) => {
        if (error || !alumno) {
            return res.status(401).json({
                error: "Alumno not found"
            });
        }
        if (!alumno.authenticate(password)) {
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
        let { _id, nombre, correo, app_alumno, apm_alumno, descripcion, linkedin, github_link } = alumno;
        nombre = nombre + ' ' + app_alumno + ' ' + apm_alumno;
        return res.json({ token, alumno: { _id, nombre, correo, descripcion, linkedin, github_link } });
    });
}


// para alumnos

exports.alumnoById = (req, res, next, id) => {
    Alumno.findById(id).exec((err, alumno) => {
        if (err || !alumno) {
            return res.status(400).json({
                error: 'Alumno no encontrado'
            });
        }
        req.alumno = alumno;
        next();
    });
};

exports.getAlumnoById = (req, res, next) => {
    if (req.alumno) {
        return res.json(req.alumno);
    }
    next();
};

exports.photoAlumno = (req, res, next) => {
    if (req.alumno.photo.data) {
        res.set('Content-Type', req.alumno.photo.contentType);
        return res.send(req.alumno.photo.data);
    }

    next();
};

exports.updateAlumno = async (req, res) => {
    try {
        const alumnoFounded = await Alumno.findById(req.params.alumnoId)
        Object.assign(alumnoFounded, req.body);
        await alumnoFounded.save();
        res.send({data: alumnoFounded});
    }
    catch (err) {
        res.status(400).send(err);
    }
};

//para empresas

exports.empresaById = (req, res, next, id) => {
    Empresa.findById(id).exec((err, empresa) => {
        if (err || !empresa) {
            return res.status(400).json({
                error: 'Empresa no encontrada'
            });
        }
        req.empresa = empresa;
        next();
    });
};

exports.getEmpresaById = (req, res, next) => {
    if (req.empresa) {
        return res.json(req.empresa);
    }
    next();
};

exports.photoEmpresa = (req, res, next) => {
    if (req.empresa.photo.data) {
        res.set('Content-Type', req.empresa.photo.contentType);
        return res.send(req.empresa.photo.data);
    }
    next();
}

exports.updateEmpresa = async (req, res) => {
    try {
        const empresaFounded = await Empresa.findById(req.params.empresaId)
        Object.assign(empresaFounded, req.body);
        await empresaFounded.save();
        res.send({data: empresaFounded});
    }
    catch (err) {
        res.status(400).send(err);
    }
};

exports.updatePhotoEmpresa = async (req, res) => {
    let form = new formidable.IncomingForm();

    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: 'Photo could not be uploaded'
            });
        }
        const empresaFounded = await Empresa.findById(req.params.empresaId)
        Object.assign(empresaFounded, fields);
        empresaFounded.photo.data = fs.readFileSync(files.photo.filepath);
        empresaFounded.photo.contentType = files.photo.type;
        await empresaFounded.save();
        res.json(empresaFounded);
    }
    );
};

