/*const Usuario = require('../models/model');
const bcryptjs = require('bcryptjs');
const axios = require('../routes/usuarios');
const {Cat} = require('../models/model');
const {validationResult} = require('express-validator');


const crearUsuarios = async (req, res) => {

    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    const {email,password} = req.body;
    try {
        let usuario = await Usuario.findOne({email});

        if(usuario){
            return res.status(400).json({msg: 'Usuario ya existe!'})
        }
        usuario = new Usuario(req.body);

        const salt= await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        await usuario.save();
        res.json('Usuario creado.!');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}
const consultaAxios = async (req, res)=>{
    const resultado = await axios.get('http://localhost:3000/api/sesion',{setTimeout: 10000}).catch((err)=>{
        err.origin = 'Error getting URL';
        throw err;
    });
    res.json(resultado.data)
}
/*
const sesion = (req, res)=>{
    let usuario = {
        user:'cesar',
        edad:'41',
        idioma:'español'
    }
    req.session.usuario = usuario
    res.json(req.session.usuario)
}

const pruebaSession = (req,res)=>{
    console.log(req.session)
    res.json(req.session.usuario)
}

const cerrarSession = (req,res)=>{
    req.session.destroy();
    res.json({msg:'sesion cerrada'});
}


module.exports = {crearUsuarios, consultaAxios}
*/