const modelo = require('../model/productos')





const productos = {
    agregar: async (req, res) => {

        const { _id, nombre, descripcion, precio, imagen } = req.body;
        await modelo.create({
            _id, nombre, descripcion, precio, imagen
        })
    },
    mostrar: (req, res) => {
        modelo.find({}).sort('_id').exec((err, modelo) => {
            if (err) {
                console.log("error al mostrar datos")
            } else {
                res.send({ data: modelo })
            }
        })

    },
    eliminar: (req, res) => {
        const productosId = req.params.id
        modelo.findByIdAndDelete(productosId, (err, productoEliminado) => {
            if (err) {
                res.send("error al eliminar")
            }
            if (!productoEliminado) {
                res.send("Id no existe")
            }
            return res.send("El producto: " + productoEliminado.nombre + " fue eliminado")
        })
    },
    subirImagen: (req, res) => {
        var projectId = req.params._id
        var filename = ""

        if (req.files) {
            var filePath = req.files.imagen.path
            var fileSplit = filePath.split("\\")
            var filename = fileSplit[1]
            var extSplit = filename.split('\.')
            var fileExt = extSplit[1]
        }
    }

}

module.exports = { productos };