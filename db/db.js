
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const dbConnection = async () => {
    try {  
        await mongoose.connect( process.env.MONGO_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } )
        console.log('La base de datos a iniciado correctamente!');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')   
    }
}

module.exports = {dbConnection}

