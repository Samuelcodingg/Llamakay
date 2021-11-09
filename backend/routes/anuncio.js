const express = require('express');
const router = express.Router();

const { create, list } = require('../controllers/anuncioController');

router.post('/create', create);
router.get('/list', list);

module.exports = router;