// Email send functionality
function sendEmail() {Email.send({
    SecureToken:  "2e7c570b-9167-4acc-b5c5-f4c99b12c25d",
    To : 'georgehlongwane8@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Website Query",
    Body : "Name: " + document.getElementById("name").value + "<br> Email: " 
    + document.getElementById("email").value 
    + "<br> Phone no: " + document.getElementById("phoneNumber").value
    + "<br> says: " + document.getElementById("message").value
}).then(
  message => alert("Message Sent Successfully!")
);
}

