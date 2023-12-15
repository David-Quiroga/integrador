const express = require('express');
const router = express.Router();

const { showRegister, register, showLogin, login, logout, showProfile } = require('../controllers/register.controller')

const {isLoggedIn} = require('../lib/auth')

router.get('/register', showRegister)
router.post('/register', register)
router.get('/Login/:id', showLogin)
router.post('/Login', login)
router.get('/logout', logout)
router.get('/profile/:id', isLoggedIn, showProfile)


module.exports = router