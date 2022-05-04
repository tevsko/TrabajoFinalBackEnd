/*const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const {vistaTodosCaballeros, crearCaballero, vistaUncaballero, editarCaballero, eliminarCaballero} = require('../controller/controller.js');
const consultaAxios = require('axios');
const usuariosControlers = require('../controller/usuarioController');


//axios
router.get('/axios', consultaAxios);

//GET ver todos los usuarios
router.get('/ver', vistaTodosCaballeros);

//GET ver un usuario
router.get('/ver/usuario:id', vistaUncaballero);


//PUT
router.put('/editar/usuario',
    [
    check('nombre').not().isEmpty().withMessage('El nombre es obligatorio'),
    check('email').not().isEmpty().isEmail().withMessage('Agrega un email válido'),
    check('contraseña').not().isEmpty().isLength({ min: 6}).withMessage('la contraseña debe ser minimo de 6 caracteres')
], editarCaballero); 


//POST
router.post('/cargar',
    [
    check('name').not().isEmpty().withMessage('El nombre es obligatorio'),
    check('email').not().isEmpty().isEmail().withMessage('Agrega un email válido'),
    check('contraseña').not().isEmpty().isLength({ min: 6}).withMessage('la contraseña debe ser minimo de 6 caracteres')
], crearCaballero); 

//DELETE
router.delete('/eliminar/usuario',
[
check('_id').not().isEmpty().isLength({max:12, min:4}).withMessage('el usuario debe tener minumo 24 caracteres')
], eliminarCaballero); 


module.exports = router;
*/
