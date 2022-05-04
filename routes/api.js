const express = require('express');
const router = express.Router(); 
const {vistaTodosCaballeros, crearCaballero, sesion, pruebaSession, cerrarSession, consultarCookie, eliminarCookie, loginUsuarios} = require('../controller/controller.js');
const Controllers = require('../controller/controller')
const {check} = require('express-validator');
const auth = require('../middleware/auth');
const consultaAxios = require('axios');



//axios
router.get('/axios', consultaAxios);

/* GET users listing. */
router.get('/ver', vistaTodosCaballeros);


router.post('/crear/',[
    check('name').not().isEmpty().isLength({max:15, min:4}).withMessage('El nombre debe tener maximo 15 caracteres y no menos de 4 '),
], crearCaballero);
router.get('/sesion', sesion);
router.get('/pruebasesion',auth, pruebaSession);
router.get('/cerrarsesion', cerrarSession);
router.get('/consultacookie', consultarCookie);
router.get('/eliminarcookie', eliminarCookie);
router.post('/login',[
    check('email').not().isEmpty().isEmail(),
    check('contraseña').not().isEmail(),
], loginUsuarios);
//router.put('/editar/:id', editarCaballero);
//router.delete('/eliminar/:id', borrarCaballero);
/*router.post('/login',
[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email','Agregar un email valido').isEmail(),
    check('password', 'El password debe ser minimo 6 caracteres').isLength({min: 6})
],
    Controllers.crearUsuarios
);*/


module.exports = router;
