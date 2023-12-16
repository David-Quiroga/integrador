const express = require('express');
const router = express.Router();

const  { show, send, mostrar, Mostrar } = require('../controllers/index.controller')

router.get('/', show)
router.post('/', send)
router.get('/login', mostrar)
router.get('/register', Mostrar)

module.exports = router