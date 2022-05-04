const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caballeroSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    constelacion: {
        type: String,
        required: true,
        trim: true,
    },
    categoria: {
        type: String
    }
})

const Caballero = mongoose.model('Caballero', caballeroSchema);

module.exports = Caballero;