$(document).ready(function () {
    // Fetch all products from the backend
    $.ajax({
        type: "GET",
        url: "/products/getAllProducts",
        success: function (products) {
            console.log("Fetched products:", products); // Debugging log

            let carouselItems = '';
            let carouselItem = '';

            products.forEach(function (product, index) {
                console.log("Processing product:", product); // Debugging log

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
                                <a href="login.html" class="btn btn-primary w-100 view-details-btn" data-id="${product.id}">View Details</a>
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

            // Debug: Check if data-id is set in HTML
            setTimeout(() => {
                console.log("Final Carousel HTML:", $('#product-carousel').html());
            }, 3000);
        },
        error: function (error) {
            console.log("Error fetching products: ", error);
        }
    });

    // Use event delegation to handle clicks on dynamically loaded buttons
    $(document).on('click', '.view-details-btn', function (event) {
        event.preventDefault();  // Prevent default anchor behavior

        const productId = $(this).attr('data-id') || $(this).get(0).getAttribute('data-id'); // Force-fetch data-id
        console.log("Button clicked:", this); // Debugging log
        console.log("Product ID:", productId); // Debugging log

        if (productId) {
            localStorage.setItem('product_id', productId); // Store the product ID in localStorage
            console.log("Product ID stored in localStorage:", productId);
            window.location.href = $(this).attr('href'); // Navigate to product details page
        } else {
            console.log("No product ID found.");
        }
    });
});
