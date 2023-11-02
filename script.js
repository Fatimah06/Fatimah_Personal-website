emailjs.init("SUtuyQW_soQa-pszZ");

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send("service_0iug326", "template_z5t74xg", templateParams)
        .then(function (response) {
            console.log("Your message has been sent successfully!", response);
            window.alert("Your message has been sent successfully!");
        }, function (error) {
            console.error("Sorry, an error occurred while sending the message. Please try again.", error);
        });
});






