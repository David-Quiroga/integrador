const express = require('express');
const router = express.Router();

const  { show, send } = require('../controllers/index.controller')

router.get('/', show)
router.post('/', send)

module.exports = router