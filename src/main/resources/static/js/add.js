$(document).ready(function () {
    // Prevent form submission by default
    $("#add-product-form").submit(function (event) {
        event.preventDefault(); // Move it inside the submit handler

        // Get the file from the input
        const fileInput = document.getElementById('imageUrl');
        const file = fileInput.files[0]; // Get the first selected file
        const imageName = file ? file.name : ""; // Get the file name if there's a file, otherwise an empty string

        // Create the Product object
        let Product = {
            name: $("#name").val(),
            price: $("#price").val(),
            description: $("#description").val(),
            stock: $("#stock").val(),
            imageUrl: imageName, // Pass the image name here
        };

        // Send the product data via AJAX
        $.ajax({
            type: "POST",
            url: "/products/addProduct",
            contentType: "application/json",
            data: JSON.stringify(Product),
            success: function () {
                window.location.href = "admin.html"; // Redirect after successful post
            },
            error: function (error) {
                console.log("Error saving product: ", error);
            }
        });
    });
});
