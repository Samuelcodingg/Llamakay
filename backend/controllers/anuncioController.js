const Anuncio = require('../models/Anuncio');

exports.create = (req, res) => {
    const anuncio = new Anuncio(req.body);
    anuncio.save((err, data) => {
        if(err) {
            console.log(err);
            return res.status(400).json({
                error: err
            });
        }
        res.json({data});
    })
}

exports.list = (req, res) => {
    Anuncio.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({data});
    })
}

exports.anuncioById = (req, res, next, id) => {
    Anuncio.findById(id).exec((err, data) => {
        if(err || !data) {
            return res.status(400).json({
                error: "Anuncio not found"
            });
        }
        req.data = data;
        next();
    });
}

exports.getAnuncioById = (req, res, next) => {
    if(req.data) {
        return res.json(req.data);
    }
    next();
}

exports.postular = async (req, res) => {
    try {
        const anuncio = await Anuncio.findById(req.params.anuncioId);
        anuncio.postulantes.push(req.body.idAlumno);
        await anuncio.save();
        return res.json({
            message: "Postulante agregado con exito"
        });
    } catch(err) {
        console.log(err);
        return res.status(400).json({
            error: err
        });
    }
}

exports.isPostulado = async (req, res) => {
    try {
        const anuncio = await Anuncio.findById(req.params.anuncioId);
        const postulante = anuncio.postulantes.find(postulante => postulante == req.body.idAlumno);
        if(postulante) {
            return res.json({
                message: true
            });
        }
        return res.json({
            message: false
        });
    } catch(err) {
        console.log(err);
        return res.status(400).json({
            error: err
        });
    }
}