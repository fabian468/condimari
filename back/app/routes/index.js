const express = require('express')
const router = express.Router()
const fs = require('fs')

const directorio = `${__dirname}`

const SinExtension = (nombreArchivo) => {
    return nombreArchivo.split('.').shift()
}

fs.readdirSync(directorio).filter((file) => {
    const nombreSinExtencion = SinExtension(file)
    const skip = ['index'].includes(nombreSinExtencion)
    if (!skip) {
        router.use(`/${nombreSinExtencion}`, require(`./${nombreSinExtencion}`))
        console.log('-----ruta cargada', nombreSinExtencion)
    }

})


module.exports = router