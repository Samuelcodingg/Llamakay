const express = require('express');
const router = express.Router();

const { create, list, anuncioById, getAnuncioById, postular, isPostulado } = require('../controllers/anuncioController');

router.post('/create', create);
router.get('/list', list);
router.get('/:anuncioId', getAnuncioById);
router.put('/postular/:anuncioId', postular );
router.post('/postulado/:anuncioId', isPostulado);

router.param('anuncioId', anuncioById);

module.exports = router;