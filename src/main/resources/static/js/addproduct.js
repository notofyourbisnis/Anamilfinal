// Sample Products Array (Simulates Backend Data)
const products = [];

// Function to Render Products
function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear existing products

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <p>Stock: ${product.stock}</p>
            <button onclick="applyDiscount(${product.id})">Apply 10% Discount</button>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;

        productList.appendChild(productCard);
    });
}

// Function to Add a Product
document.getElementById("add-product-form").addEventListener("submit",function(event) {

    const fileInput = document.getElementById("imageUrl");
    const file = fileInput.files[0];

    if (file) {
     const reader = new FileReader();
            reader.onload = function (event) {
        const formData = new FormData();
        formData.append('name', document.getElementById("name").value);
        formData.append('price', parseFloat(document.getElementById("price").value));
        formData.append('description', document.getElementById("description").value);
        formData.append('stock', parseInt(document.getElementById("stock").value));
        formData.append('imageUrl', event.target.result); // Append the image file

        // Send the product data to the backend via a POST request with formData
        fetch('/products/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Product added:', data);
            renderProducts(); // Update the product list
            e.target.reset(); // Reset the form
        })
        .catch(error => {
            console.error('Error adding product:', error);
        });
    }
}

// Function to Apply Discount
function applyDiscount(productId) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        product.price *= 0.9; // Apply 10% discount
        renderProducts();
    }
}

// Function to Delete a Product
function deleteProduct(productId) {
    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        renderProducts();
    }
}

// Initial Render
renderProducts();})
