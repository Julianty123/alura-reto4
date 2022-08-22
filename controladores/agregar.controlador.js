import { clientServices } from "../servicios/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombreProducto = document.querySelector("[data-producto]").value;
    const precioProducto = document.querySelector("[data-precio]").value;
    const descripcionProducto = document.querySelector("[data-descripcion]").value;
    console.log(url, " ", categoria, " ", nombreProducto, precioProducto, descripcionProducto);
    clientServices.agregarProducto(url, categoria, nombreProducto, precioProducto, descripcionProducto).then((respuesta) => {
        console.log(respuesta);
        window.location.href = "ingreso_exitoso.html";
    }).catch((error) => console.log(error));

});
