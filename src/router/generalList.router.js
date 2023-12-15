const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')

const { show, showCars, showCarsAdd, sendCarsadd, bringCars, updateCars } = require('../controllers/generalList.controller')

router.get('/generalList/', isLoggedIn, show)
router.get('/cars/list/:id', isLoggedIn, showCars);
router.get('/cars/add/:id', isLoggedIn, showCarsAdd);
router.post('/cars/add/:id', isLoggedIn, sendCarsadd);
router.get('/cars/edit/:id', isLoggedIn, bringCars);
router.post('/cars/edit/:id', isLoggedIn, updateCars);

module.exports = router