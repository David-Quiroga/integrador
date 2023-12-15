const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')



const { show, send, list, detalle, traer, update } = require('../controllers/matricula.controller')

const { showMantenimiento, sendMantenimiento, listMantenimiento, bringMantenimiento, updateMantenimiento, detalleMantenimiento } = require('../controllers/mantenimiento.controller');

const { showOrderWork, bringOrderWork, updateOrderWork, sendOrderWork, listOrderWork, detalleOrderWork } = require('../controllers/ordenTabajo.controller');

const { showKilometrage } = require('../controllers/kilometraje.controller');
const { showImplemeto, detalleImplemeto, bringImplemeto, sendImplemeto, updateImplemeto } = require('../controllers/implementos.controller');

router.get('/kilometraje/add/:id', isLoggedIn, showKilometrage)

router.get('/implementos/add/:id', isLoggedIn, showImplemeto)
router.post('/implementos/add/:id', isLoggedIn, sendImplemeto)
router.get('/implementos/list/:id', isLoggedIn, detalleImplemeto)
router.get('/implementos/edit/:id', isLoggedIn, bringImplemeto)
router.post('/implementos/edit/:id', isLoggedIn, updateImplemeto)

///
router.get('/mantenimiento/add/:id', isLoggedIn, showMantenimiento)
router.post('/mantenimiento/add/:id', isLoggedIn, sendMantenimiento)
router.get('/mantenimiento/list/:id', isLoggedIn, listMantenimiento)
router.get('/mantenimiento/detailList/:id', isLoggedIn, detalleMantenimiento)
router.get('/mantenimiento/edit/:id', isLoggedIn, bringMantenimiento)
router.post('/mantenimiento/edit/:id', isLoggedIn, updateMantenimiento)
///


router.get('/matricula/add/:id', isLoggedIn, show)
router.post('/matricula/add/:id', isLoggedIn, send)
router.get('/matricula/list/:id', isLoggedIn, list)
router.get('/matricula/detailList/:id', isLoggedIn, detalle)
router.get('/matricula/edit/:id', isLoggedIn, traer)
router.post('/matricula/edit/:id', isLoggedIn, update)

router.get('/ordenTrabajo/add/:id', isLoggedIn, showOrderWork)
router.post('/ordenTrabajo/add/:id', isLoggedIn, sendOrderWork)
router.get('/ordenTrabajo/list/:id', isLoggedIn, listOrderWork)
router.get('/ordenTrabajo/detailList/:id', isLoggedIn, detalleOrderWork)
router.get('/ordenTrabajo/edit/:id', isLoggedIn, bringOrderWork)
router.post('/ordenTrabajo/edit/:id', isLoggedIn, updateOrderWork)

module.exports = router