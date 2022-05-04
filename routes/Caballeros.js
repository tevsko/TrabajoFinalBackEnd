const express = require('express');
const router = express.Router();
const Caballero = require('../models/caballero');



router.get('/', async (req, res)=>{
    try {
        const ArrayCaballero = await Caballero.find();
        console.log(ArrayCaballero)

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;