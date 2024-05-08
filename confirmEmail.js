function validateEmail() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
        alert("Emails do not match. Please make sure the email fields match.");
        event.preventDefault();
    }
}