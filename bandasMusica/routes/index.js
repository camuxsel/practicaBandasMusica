var express = require('express');
var router = express.Router();

const bandasController = require('../controllers/bandasController');

/* GET home page. */
router.get('/', bandasController.listadoBanda);

router.get('/id/:id', bandasController.detalleBanda);

router.get('/genero/:genero', bandasController.porGenero);



module.exports = router;
