

$(document).ready(function () {

$.ajax({
          type: "GET",
          url: "/users/findUserId/" + localStorage.getItem("id"),
          success: function (user) {
          //alert(JSON.stringify(user))
              // Update input fields with user data
               document.getElementById("date").value = user.date;
              document.getElementById("email").value = user.email;
              document.getElementById("name").value = user.name;
              document.getElementById("password").value = user.password;
              document.getElementById("phone").value = user.phone;




               localStorage.setItem("date",user.date);
              localStorage.setItem("email", user.email);
              localStorage.setItem("name", user.name);
              localStorage.setItem("password", user.password);
              localStorage.setItem("phone", user.phone);
          },
          error: function (error) {
              console.log("Error finding your account", error);
      }

});
});