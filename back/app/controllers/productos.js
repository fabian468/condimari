const modelo = require('../model/productos')





const productos = {
    agregar: async (req, res) => {

        const { id, nombre, descripcion, precio } = req.body;
        const detalleRespuesta = await modelo.create({
            id, nombre, descripcion, precio
        })
    },
    mostrar: (req, res) => {
        modelo.find({}).sort('id').exec((err, modelo) => {
            if (err) {
                console.log("error al mostrar datos")
            } else {
                res.send({ data: modelo })
            }
        })

    },
    eliminar: (req, res) => {
        const id = req.body.id

    }

}

module.exports = { productos };