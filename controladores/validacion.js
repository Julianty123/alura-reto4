const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-usuario]").value;
    const clave = document.querySelector("[data-clave]").value;

    if (nombre == "alura" && clave == "geek") {
        window.location.href = "productosAdmin.html";
    } else {
        alert("Contraseña y/o usuari@ incorrectos");
    }
});