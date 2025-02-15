const productsContainer = document.getElementById("products-container");
const cartContainer = document.getElementById("cart-container");

const products = [
    {
        id: 1,
        name: "Shampoo Revitalizante",
        category: "Cuidado Personal",
        image: "https://example.com/shampoo.jpg",
        price: 18
    },
    {
        id: 2,
        name: "Acondicionador Suavizante",
        category: "Cuidado Personal",
        image: "https://example.com/acondicionador.jpg",
        price: 15
    },
    {
        id: 3,
        name: "Jabón Exfoliante",
        category: "Cuidado Personal",
        image: "https://example.com/jabon.jpg",
        price: 7
    },
    {
        id: 4,
        name: "Crema Hidratante Facial",
        category: "Cuidado Personal",
        image: "https://example.com/crema.jpg",
        price: 25
    },
    {
        id: 5,
        name: "Detergente Líquido",
        category: "Hogar",
        image: "https://example.com/detergente.jpg",
        price: 22
    },
    {
        id: 6,
        name: "Limpiador Multiusos",
        category: "Hogar",
        image: "https://example.com/limpiador.jpg",
        price: 12
    },
    {
        id: 7,
        name: "Desinfectante en Spray",
        category: "Hogar",
        image: "https://example.com/desinfectante.jpg",
        price: 10
    },
    {
        id: 8,
        name: "Ambientador Frescura Floral",
        category: "Hogar",
        image: "https://example.com/ambientador.jpg",
        price: 8
    },
    {
        id: 9,
        name: "Papel Higiénico (12 rollos)",
        category: "Hogar",
        image: "https://example.com/papel.jpg",
        price: 15
    },
    {
        id: 10,
        name: "Toallas de Papel (6 rollos)",
        category: "Hogar",
        image: "https://example.com/toallas.jpg",
        price: 12
    }
];
let cart = [];

function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Añadir al carrito</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function displayCart() {
    cartContainer.innerHTML = ""; // Limpiar el carrito antes de mostrar los productos actualizados
    cart.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Cantidad: ${item.quantity}</p>
            <p>Precio: $${item.price * item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartContainer.appendChild(cartItemDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    displayCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCart();
}

displayProducts();
displayCart();