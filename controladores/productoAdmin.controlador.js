import { clientServices } from "../servicios/client-service.js";

const crearNuevaLinea = (url, nombre, precio, id) => {
    
    const linea = document.createElement("div");
    const contenido = `
    <div class="items__item">
        <img class=items__imagen src="${url}" alt="" />
        <div class="items__texto">
            <p class="items__texto--titulo">${nombre}</p>
            <p class="items__texto--precio">$${precio}</p>
            <button class="items__editar" id="${id}" data-editar>Editar</button>
            <button class="items__borrar" id="${id}" data-borrar>Borrar</button>
            
        </div>
    </div>
    `;
    linea.innerHTML = contenido;
    const btnBorrar = linea.querySelector("[data-borrar]");
    btnBorrar.addEventListener("click", () => {
        const id = btnBorrar.id;
        clientServices.borrarCliente(id).then(() => {
            
        }).catch((error) => console.log(error));
    });
    const btnEditar = linea.querySelector("[data-editar]");
    btnEditar.addEventListener("click", () => {
        const id = btnEditar.id;
        window.location.href = `editar.html?id=${id}`;
        //clientServices.editarCliente(id).then(() => {
            //window.location.href = "productosAdmin.html";
        //}).catch((error) => console.log(error));
    });
    return linea;
};

const lineaProducto = document.querySelector("[data-fila]");

clientServices.listaProductos().then((respuesta) => {
    respuesta.forEach((producto) => {
        lineaProducto.appendChild(crearNuevaLinea(producto.url, producto.nombre, producto.precio, producto.id));
    });
}).catch((error) => console.log(error));