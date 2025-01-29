


$(document).ready(function () {
    $("#signup1").submit(function (event) {

    event.preventDefault();
    let user = {
    name: $("#name").val(),
    date: $("#date").val(),
    email: $("#email").val(),
    password: $("#password").val(),
    phone: $("#phone").val()
};
    $.ajax({
    type: "POST",
    url: "/users/addUser",
    contentType: "application/json",
    data: JSON.stringify(user),

    success: function () {
window.location.href = "login.html"

},
    error: function (error) {
    console.log("Error saving person: ", error);
}
});
});
$(document).ready(function(){
    $("#loginform").submit(function (event) {
        event.preventDefault();

        var email = $("#email").val();
        var password = $("#password").val();

        $.ajax({
            type: "GET",
            url: "/users/login/" + email + "/" + password,
            contentType: "application/json",
            success: function (user) {
                if (user == null) {
                    alert("Wrong password or email.");
                } else {
                    localStorage.setItem("id", user.id);
                    window.location.href = "home page.html"
                }
            },
            error: function (error) {
                alert("Sorry, something went wrong.");
            }
        });
    });
});





});
