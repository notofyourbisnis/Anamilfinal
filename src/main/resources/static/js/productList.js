  $(document).ready(function () {
    // Fetch all products from the backend
    $.ajax({
        type: "GET",
        url: "/products/getAllProducts",
        success: function (products) {
            let carouselItems = '';
            let carouselItem = '';

            products.forEach(function (product, index) {
                const productCard = `
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card shadow-sm border-0">
                            <div class="card-body text-center">
                                <img src="/images/${product.imageUrl}" class="img-fluid rounded mb-3 product-image" alt="${product.name}">
                                <h5 class="card-title font-weight-bold">${product.name}</h5>
                                <p class="text-muted">${product.description}</p>
                                <p class="price-text text-primary">Price: <strong>$${product.price}</strong></p>
                                <p class="stock-text ${product.stock > 0 ? 'text-success' : 'text-danger'}">
                                    Stock: <strong>${product.stock > 0 ? product.stock : 'Out of stock'}</strong>
                                </p>
                                <a href="order.html" class="btn btn-primary w-100">Buy Now</a>
                            </div>
                        </div>
                    </div>
                `;

                // Start a new carousel item for every 3 products
                if (index % 3 === 0) {
                    if (carouselItem !== '') {
                        carouselItems += `<div class="carousel-item">${carouselItem}</div>`;
                    }
                    carouselItem = `<div class="row">${productCard}`;
                } else {
                    carouselItem += productCard;
                }

                // Handle the last set of items
                if (index === products.length - 1) {
                    carouselItems += `<div class="carousel-item">${carouselItem}</div>`;
                }
            });

            // Ensure the first item is active
            carouselItems = carouselItems.replace('<div class="carousel-item">', '<div class="carousel-item active">');

            // Add all carousel items to the carousel
            $('#product-carousel').html(carouselItems);
        },
        error: function (error) {
            console.log("Error fetching products: ", error);
        }
    });
});