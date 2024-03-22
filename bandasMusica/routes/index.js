var express = require('express');
var router = express.Router();

const bandasController = require('../controllers/bandasController');

/* GET home page. */
router.get('/', bandasController.listadoBanda);



module.exports = router;
