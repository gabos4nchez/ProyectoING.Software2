const products = [
    { name: "Camiseta", description: "Camiseta de algodón", price: 20 },
    { name: "Pantalón", description: "Pantalón vaquero", price: 50 },
    { name: "Zapatos", description: "Zapatos de cuero", price: 80 },
    { name: "Sombrero", description: "Sombrero de lana", price: 15 }
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsDiv = document.getElementById("results");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    resultsDiv.innerHTML = ""; // Limpiar resultados anteriores

    if (filteredProducts.length === 0) {
        resultsDiv.innerHTML = "<p>No se encontraron productos.</p>";
    } else {
        filteredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Precio: $${product.price}</p>
            `;
            resultsDiv.appendChild(productDiv);
        });
    }
});