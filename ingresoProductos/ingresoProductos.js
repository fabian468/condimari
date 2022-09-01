
var agregar = document.getElementById('agregar')
var productos = []


function mostrarDatos() {
    fetch("http://localhost:3000/app/productos/mostrar")
        .then(data => data.json())
        .then(data => {
            const datos = data.data

            datos.map((e) => {

                productos += `
        <div class="flex" >
            <div class="id">Id: ${e._id} </div>
            <div class="nombre ">Nombre: ${e.nombre} </div>
            <div class="descripcion">descripión: ${e.descripcion}</div>
            <div class="precio">Precio: ${e.precio}</div>
            <span id="equis" onClick="eliminarProducto(${e._id}) " >X</span>
        </div>`
            })
            document.getElementById("contenedorFlex").innerHTML = productos
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
        .then(res => alert(res))

}