const express = require('express');
const router = express.Router();
const {vistaUncaballero} = require('../controller/controller.js')

/* GET home page. */
router.get('/', vistaUncaballero);

module.exports = router;
