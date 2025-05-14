const express = require('express');
const router = express.Router();
const { crearUsuario } = require('./controller');

router.post('/create', crearUsuario);

module.exports = router;
