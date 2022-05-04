const {Caballeros} = require('../models/model');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const { json } = require('express/lib/response');


//ver un caballero
const vistaUncaballero = (req, res)=>{
    res.render('index', { title: 'Express' });
}
//ver todos los caballeros
const vistaTodosCaballeros = async (req, res) =>{
    const caballeros = await Caballeros.find()
    res.json({caballeros})
}
//crear caballeros
/*const crearCaballero = async (req, res)=>{
    const zodiaco = new Caballeros({ name: req.body.name, clase: req.body.clase });
    await zodiaco.save()
    console.log('Caballero creado con exito!')
    res.json({msg: 'Caballero CREADO!'})
}*/
//crear caballero
const crearCaballero = async (req, res) => {

    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    const {email,password} = req.body;
    try {
        let usuario = await Usuario.findOne({email});

        if(usuario){
            return res.status(400).json({msg: 'El caballero ya existe!'})
        }
        usuario = new Usuario(req.body);

        const salt= await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        await usuario.save();
        res.json('Caballero creado.!');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}



//modificar caballero
const editarCaballero = (req, res) => {

    const { nombre, email, contraseña } = req.params

    res.status(200).json({

        msg: 'Caballero editado',
        nombre
        
    })

}

//eliminar caballero
const eliminarCaballero = (req, res) => {

    const { nombre } = req.params

    res.status(200).json({

        msg: 'Caballero eliminado',
        nombre
        
    })

}

//crear usuario
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
//inicio de sesion
const sesion = (req, res)=>{
    let usuario = {
        user:'cesar',
        edad:'41',
        idioma:'español'
    }
    res.cookie('sessionDelUsuario', usuario.idioma, {MaxAge: 120000})
    req.session.usuario = usuario
    res.json(req.session.usuario)
}
//prueba la sesion
const pruebaSession = (req,res)=>{
    console.log(req.session)
    res.json(req.session.usuario)
}
//cierra la sesion
const cerrarSession = (req,res)=>{
    req.session.destroy();
    res.json({msg:'sesion cerrada'});
}
//elimina la cookie
const eliminarCookie = (req, res)=>{
    res.clearCookie('sessionDelUsuario')
    res.json({msg:'Cookie borrada'})
};
//consulta la cookie
const consultarCookie = (req, res)=>{
    res.json(req.cookies.sessionDelUsuario)
};
//logea usuario
const loginUsuarios = async (req, res)=>{
    const persona = await Caballeros.findOne({email: req.body.email})
    if (!persona) {
        res.json({msg:'el email es incorrecto!'})
    }
    if (bcrypt.compareSync(req.body.contraseña, persona.contraseña)) {
        res.json({msg:' la contraseña es incorrecta'})
    }


    const usuario = {
        _id: persona._ide,
        name: persona.name,
        email: persona.email,
        idioma: persona.idioma,
        titulo: persona.permiso || 'USER'
    }

    req.session.user = usuario

    if (req.body.recordar){
        res.cookie('sessionDelUsuario', req.session.user, {maxAge: 800000})
    }
    res.status (201).json({msg: 'usuario logeado'})


}
//deslogea usuario
const logaut =(rerq, res)=>{
    res.clearCookie('sessionDelUsuario')
    req.session.destroy();
    res.json({msg: 'session cerrada'})
}

//consulta axios
const consultaAxios = async (req, res)=>{
    const resultado = await axios.get('http://localhost:3000/api/sesion').catch((err)=>{
        err.origin = 'Error getting URL';
        throw err;
    });
    res.json(resultado.data)
}

module.exports = {
    vistaUncaballero, 
    crearCaballero, 
    editarCaballero, 
    vistaTodosCaballeros, 
    eliminarCaballero, 
    crearUsuarios, 
    sesion, 
    pruebaSession, 
    cerrarSession, 
    eliminarCookie, 
    consultarCookie, 
    loginUsuarios, 
    logaut, 
    consultaAxios
    }