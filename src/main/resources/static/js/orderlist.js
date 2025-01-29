   $(document).ready(function () {
    // Fetch data using AJAX

    function addRow(order) {
        $("#ordersList").append("<tr><td>" + order.id + "</td>" +
            "<td>" + order.name+ "</td>"+
           "<td>" + order.quantity + "</td>"
          +"<td>"+order.address+"</td>"+
            "<td>"+order.phoneNum+"</td>"+
            "<td>" +
            "<button onclick='deleteOrder(" + order.id + ")'>" + "delete" + "</button>" +
            "</td>"+
            "</tr>");
    }
    $.ajax({
    type: "GET",
    url: "/orders/getAll",
    success: function (orders) {
    // Iterate through the products and display them in the table
    const ordersList = $("#ordersList");
    orders.forEach(function (orders) {
    ordersList.append("<tr>" +
    "<td>" + orders.id + "</td>"
    +"<td>"+ orders.name + "</td>"
    +"<td>"+ orders.quantity +"</td>"+
    "<td>"+orders.address+"</td>"
    +"<td>"+ orders.phoneNum+ "</td>"+
    "<td>" +
    "<button onclick='deleteOrder(" + orders.id + ")'>" + "delete" + "</button>" +
    "</td>"
    +"</tr>");
});
},
    error: function (error) {
    console.error("Error fetching product data: ", error);
}
});
});