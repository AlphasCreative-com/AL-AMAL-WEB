// Function to send an email using mailto
function sendEmail(event) {
  event.preventDefault();

  let form = document.getElementById("contactForm");
  let formData = new FormData(form);

  console.log(formData);
  
  fetch("send_email.php", {
    method: "POST",
    body: formData,
  })
    // .then((response) => response.text()) // Get response from PHP
    .then((data) => {
      console.log(data);
      // document.getElementById("responseMessage").innerHTML = data;
      // document.getElementById("responseMessage").style.display = "block";
      document.getElementById("contactForm").reset(); // Reset form after sending
    })
    .catch((error) => console.error("Error:", error));
}

document.getElementById("contactForm").addEventListener("submit", sendEmail);
