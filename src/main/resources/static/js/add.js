$(document).ready(function () {
    // Ensure the JavaScript is working
    console.log("JavaScript loaded!");

    // Attach the submit event to the form
    $("#add-product-form").submit(function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        const fileInput = document.getElementById("imageUrl"); // Get file input
        const file = fileInput.files[0]; // Get the selected file

        if (file) {
            const reader = new FileReader(); // Create FileReader to read file

            // When the file is read, execute this function
            reader.onload = function (fileEvent) {
                // Create the Product object
                let Product = {
                    name: $("#name").val(), // Get product name
                    price: parseFloat($("#price").val()), // Get price as a number
                    description: $("#description").val(), // Get description
                    stock: parseInt($("#stock").val(), 10), // Get stock as an integer
                    imageUrl: fileEvent.target.result // Get the Base64 URL of the image
                };

                console.log("Product object created:", Product); // Debugging

                // Send the product data to the backend via AJAX.


                $.ajax({
                    type: "POST",
                    url: "/products/addProduct", // Replace with your backend URL
                    contentType: "application/json",
                    data: JSON.stringify(Product), // Convert Product to JSON
                    success: function () {
                        alert("Product added successfully!");
                        window.location.href = "admin.html"; // Redirect to admin page on success
                    },
                    error: function ( error) {
                        console.error("Error adding product:", error); // Debugging
                        alert("Failed to add product. Please try again.");
                    }
                });
            };

            reader.readAsDataURL(file); // Read the file as a Base64 string
        } else {
            alert("Please select an image!"); // Notify user if no image is selected
        }
    });
});
