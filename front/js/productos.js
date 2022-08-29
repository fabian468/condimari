const url = "http://localhost:3000/app/productos/mostrar"

fetch(url)
    .then(data => data.json())
    .then(data => {
        const datos = data.data
        var productos = []
        datos.map((e) => {

            productos += `<div class="contenedor_p">
                    <p><b>Nombre</b>: ${e.nombre} </p>
                    <p><b>Descripción</b>: ${e.descripcion}</p>
                    <p><b>Precio</b>:${e.precio} </p>
                    <button id="comprar">Comprar</button>
                </div>`
        })
        document.getElementById("productos").innerHTML = productos
    })