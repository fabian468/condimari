
var agregar = document.getElementById('agregar')
var productos = []
var ides = []



function mostrarDatos() {
    fetch("http://localhost:3000/app/productos/mostrar")
        .then(data => data.json())
        .then(data => {
            const datos = data.data
            var ultimoId = 0
            datos.map((e) => {
                //id automatico
                ides += e._id + " "
                idesarray = ides.split(" ")
                ultimoId = idesarray.at(-2)

                productos += `
        <form class="flex" >
            <div class="id">Id: ${e._id} </div>
            <div class="nombre ">Nombre: ${e.nombre} </div>
            <div class="descripcion">descripión: ${e.descripcion}</div>
            <div class="precio">Precio: ${e.precio}</div>
            <button id="equis" onClick="eliminarProducto(${e._id})" >Eliminar</button>
        </form>`
            })
            document.getElementById("contenedorFlex").innerHTML = productos
            var calculoId = parseInt(ultimoId) + 1
            var ids = document.getElementById('id')
            ids.innerHTML = "<strong>Id:</strong> " + calculoId
            ids.value = calculoId


        })
}


// agregar productos
agregar.addEventListener('click', () => {
    let id = document.getElementById('id')
    var nombre = document.getElementById('nombre')
    var descripcion = document.getElementById('descripcion')
    var precio = document.getElementById('precio')
    var datos = {
        _id: id.value,
        nombre: nombre.value,
        descripcion: descripcion.value,
        precio: precio.value
    }
    fetch('http://localhost:3000/app/productos/agregar',
        {
            method: 'post',
            body: JSON.stringify(datos),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(res => res.json())
        .then(res => {
            document.getElementById("guardado").innerHTML = 'Datos guardados'
        })

})


// mostrar productos
mostrarDatos()




function eliminarProducto(id) {
    fetch("http://localhost:3000/app/productos/eliminar/" + id, {
        method: 'DELETE'
    })
        .then(res => res.text())
        .then(res => console.log(res))

}



// //agregar id automatico
// window.onload = function () {
//     let ides = 1
//     document.getElementById('id').value = ides + 1

// }
