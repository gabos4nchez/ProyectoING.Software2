document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos();
});

document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let codigo = document.getElementById("codigo").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
    let proveedor = document.getElementById("proveedor").value;

    // Validar campos vacíos
    if (!nombre || !codigo || !descripcion || !precio || !proveedor) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    let producto = {
        nombre,
        codigo,
        descripcion,
        precio,
        proveedor
    };

    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));

    // Limpiar formulario y actualizar tabla
    this.reset();
    mostrarProductos();
});

function mostrarProductos() {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    let tbody = document.getElementById("productTableBody");
    tbody.innerHTML = "";

    productos.forEach((producto, index) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.codigo}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio}</td>
            <td>${producto.proveedor}</td>
            <td><button class="delete-btn" onclick="eliminarProducto(${index})">Eliminar</button></td>
        `;
        tbody.appendChild(fila);
    });
}

function eliminarProducto(index) {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos();
}
