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
                } else if(user.name=="orders"){
                                    localStorage.setItem("id", user.id);
                    window.location.href = "index.html"
}
else
                {
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
