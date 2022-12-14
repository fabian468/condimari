const mongoose = require('mongoose')

const ProductosSchema = new mongoose.Schema({
    _id: {
        type: Number,
    },
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    precio: {
        type: Number
    },
    imagen: {
        String
    }
},
    {
        versionKey: false
    })

module.exports = mongoose.model('productos', ProductosSchema)

