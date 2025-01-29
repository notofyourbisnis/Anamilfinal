$(document).ready(function () {
    $("#orderform").submit(function (event) {

    event.preventDefault();
    let order = {
    name: $("#name").val(),
    quantity: $("#quantity").val(),
    address: $("#address").val(),
    phoneNum: $("#phoneNum").val()
};
    $.ajax({
    type: "POST",
    url: "/orders/addOrder",
    contentType: "application/json",
    data: JSON.stringify(order),

    success: function () {

window.location.href = "orders list.html"

},
    error: function (error) {
    console.log("Error saving order: ", error);
}
});
});
});