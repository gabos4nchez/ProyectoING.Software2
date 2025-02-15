const productSelect = document.getElementById("product-select");
const statusSteps = document.querySelectorAll(".status-step");

const productStatus = {
    "camiseta": 0, // Empaquetado
    "pantalon": 1, // En camino
    "zapatos": 2  // Entregado
};

productSelect.addEventListener("change", () => {
    const selectedProduct = productSelect.value;
    const currentStatus = productStatus[selectedProduct];

    // Reiniciar estados
    statusSteps.forEach(step => step.classList.remove("active"));

    // Activar el estado correspondiente al producto seleccionado
    for (let i = 0; i <= currentStatus; i++) {
        statusSteps[i].classList.add("active");
    }
});