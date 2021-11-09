const Anuncio = require('../models/Anuncio');

exports.create = (req, res) => {
    const anuncio = new Anuncio(req.body);
    anuncio.save((err, data) => {
        if(err) {
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