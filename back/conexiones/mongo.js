const mongoose = require('mongoose')

const conexion = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('conexion exitosa')
        } else {
            console.log('error en la conexion :', err)
        }
    })
}

module.exports = { conexion }