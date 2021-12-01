const express = require('express');
const router = express.Router();

const { create, list, anuncioById, getAnuncioById } = require('../controllers/anuncioController');

router.post('/create', create);
router.get('/list', list);
router.get('/:anuncioId', getAnuncioById);

router.param('anuncioId', anuncioById);

module.exports = router;