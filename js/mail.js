// Function to send an email using mailto
function sendEmail(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var mailtoLink =
    "mailto:mraihan278@gmail.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
    );

  window.location.href = mailtoLink;
}
