const express = require('express');
const router = express.Router();
let indexController = require('../controller/indexController.js');

/******dejo solo la ruta y agrego el controller *******/
router.get('/', indexController.index);


router.get('/registro', indexController.register);


module.exports = router;
