import { clientServices } from "../servicios/client-service.js";

const crearNuevaLinea = (url, nombre, precio) => {
    const linea = document.createElement("div");
    const contenido = `
    <div class="items__item">
        <img class=items__imagen src="${url}" alt="" />
        <div class="items__texto">
            <p class="items__texto--titulo">${nombre}</p>
            <p class="items__texto--precio">$${precio}</p>
            <a class="items__texto--link" href="#">Ver producto</a>
        </div>
    </div>
    `;
    linea.innerHTML = contenido;
    return linea;
}

const lineaProducto = document.querySelector("[data-fila]");

clientServices.listaProductos().then((respuesta) => {
    respuesta.forEach((producto) => {
        lineaProducto.appendChild(crearNuevaLinea(producto.url, producto.nombre, producto.precio));
    });
}).catch((error) => console.log(error));

