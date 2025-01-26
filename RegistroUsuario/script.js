// Array para almacenar los registros
let clientes = [];

// Capturamos el evento de envío del formulario
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    let tipo = document.getElementById('tipo').value;
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;

    // Crear un objeto cliente/proveedor
    let cliente = {
        tipo: tipo,
        nombre: nombre,
        email: email,
        telefono: telefono
    };

    // Agregar el cliente al array
    clientes.push(cliente);

    // Mostrar mensaje de éxito
    let mensaje = document.getElementById('mensaje');
    mensaje.textContent = `${tipo} registrado con éxito: ${nombre}`;
    mensaje.style.color = 'green';

    // Mostrar la lista de clientes registrados
    mostrarClientes();

    // Limpiar el formulario
    document.getElementById('registroForm').reset();
});

// Función para mostrar los clientes registrados
function mostrarClientes() {
    // Seleccionamos el contenedor donde se mostrará la lista
    let listaClientes = document.getElementById('listaClientes');

    // Limpiamos el contenido anterior
    listaClientes.innerHTML = '<h3>Clientes y Proveedores Registrados:</h3>';

    // Generamos la lista de clientes
    clientes.forEach((cliente, index) => {
        let clienteInfo = document.createElement('p');
        clienteInfo.textContent = `${index + 1}. ${cliente.tipo}: Nombre: ${cliente.nombre}, Email: ${cliente.email}, Teléfono: ${cliente.telefono}`;
        listaClientes.appendChild(clienteInfo);
    });
}
