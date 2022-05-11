const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    constelacion: {
        type: String,
        required: true,
        trim: true,
    }
});
const Caballeros = mongoose.model('Caballeros', storeSchema);

module.exports = {Caballeros}