const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json()).catch((error) => console.log(error));


const agregarProducto = (url, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: uuid.v4(),
            url,
            categoria,
            nombre, 
            precio,
            descripcion
        })
    });
};


const borrarCliente = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
    });
};


const detalleProducto = (id) => fetch(`http://localhost:3000/productos/${id}`).then(respuesta => respuesta.json());


const actualizarProducto = (url, categoria, nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            url,
            categoria,
            nombre, 
            precio,
            descripcion
        })
    }).then((respuesta) => console.log(respuesta)).catch((error) => console.log(error));
};

export const clientServices = {
    listaProductos,
    agregarProducto,
    borrarCliente,
    detalleProducto,
    actualizarProducto,
};