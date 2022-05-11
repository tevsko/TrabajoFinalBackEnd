const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const Caballero = require('../models/caballero')

router.get('/', async (req, res) => {
    try {
        const arrayCaballerosDB = await Caballero.find();
        console.log(arrayCaballerosDB)
        res.render("caballeros", {
            arrayCaballeros: arrayCaballerosDB            
        })
    } catch (error) {
        console.log(error)
    }
})
router.get('/crear', (req, res)=> {
    res.render('crear');
})

router.post('/', async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        const caballeroDB = new Caballero(body)
        await caballeroDB.save()
        res.redirect('/caballeros')
    } catch (error) {
        console.log('error', error)
    }
});

router.get('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const caballeroDB = await Caballero.findOne({_id: id})
        console.log(caballeroDB)
        res.render('detalle',{
            caballero: caballeroDB,
            error: false
        })
        
    } catch (error) {
        console.log(error)
        res.render('detalle',{
            error: true,
            mensaje:' no se encuentra el id'
        })
        
    }
})

router.delete('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const caballeroDB = await Caballero.findByIdAndDelete({_id: id})
        if (caballeroDB) {
            res.json({
                estado: true,
                mensaje: 'eliminado'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'Fallo al eliminar'
            })
        }
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async ( req, res)=>{
    const id = req.params.id;
    const body = req.body
    try {
        const caballeroDB = await Caballero.findByIdAndUpdate(id, body, {useFindAndModify: false})
        res.json({
            estado: true,
            mensaje: 'Caballero editado'
            
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Caballero no editado'
        })
    }
})

module.exports = router;