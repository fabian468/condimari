const express = require('express')
const router = express.Router()
const { productos } = require('../controllers/productos')


router.post('/agregar', productos.agregar);
router.get('/mostrar', productos.mostrar);
router.delete('/eliminar/:id', productos.eliminar)

module.exports = router