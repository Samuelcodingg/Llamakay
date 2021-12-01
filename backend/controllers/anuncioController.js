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