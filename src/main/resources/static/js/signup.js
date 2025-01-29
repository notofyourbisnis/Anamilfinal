document.getElementById('signup-form').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value.trim();
    var birthdate = document.getElementById('birthdate').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var phone = document.getElementById('phone').value.trim();

    var errorMessage = '';

    if (username === '') {
        errorMessage += 'Please enter your username.<br>';
    }

    if (birthdate === '') {
        errorMessage += 'Please enter your birthdate.<br>';
    }

    if (email === '') {
        errorMessage += 'Please enter an email address.<br>';
    } else if (!validateEmail(email)) {
        errorMessage += 'Please enter a valid email address.<br>';
    }

    if (password === '') {
        errorMessage += 'Please enter your password.<br>';
    }

    if (phone === '') {
        errorMessage += 'Please enter your phone number.<br>';
    } else if (!validatePhoneNumber(phone)) {
        errorMessage += 'Please enter a valid phone number (e.g., 123-456-7890).<br>';
    }

    if (errorMessage !== '') {
        document.getElementById('error-message').innerHTML = errorMessage;
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhoneNumber(phone) {
    var re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return re.test(phone);
}
