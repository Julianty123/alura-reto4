import { clientServices } from "../servicios/client-service.js";

const formulario = document.querySelector("[data-form]");


const obtenerInformacion = () => {

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    

    const url1 = document.querySelector("[data-url]");
    const categoria = document.querySelector("[data-categoria");
    const nombreProducto = document.querySelector("[data-producto]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    clientServices.detalleProducto(id).then((detalle) => {
        url1.value = detalle.url;
        categoria.value = detalle.categoria;
        nombreProducto.value = detalle.nombre;
        precio.value = detalle.precio;
        descripcion.value = detalle.descripcion;
        
    }).catch((error) => {console.log(error)});


};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const url1 = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria").value;
    const nombreProducto = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    clientServices.actualizarProducto(url1, categoria, nombreProducto, precio, descripcion, id).then(() => {
        window.location.href = "edicion_exitosa.html";
    });

});