const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caballeroSchema = new Schema({
    nombre: String,
    constelacion: String
})

const Caballero = mongoose.model('Caballero', caballeroSchema);

module.exports = Caballero;