// Function to send an email form home page
function sendEmail(event) {
  event.preventDefault();

  let form = document.getElementById("contactForm");
  let formData = new FormData(form);

  fetch("send_email.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      // document.getElementById("responseMessage").innerHTML = data;
      // document.getElementById("responseMessage").style.display = "block";
      document.getElementById("contactForm").reset(); // Reset form after sending
    })
    .catch((error) => console.error("Error:", error));
}

document.getElementById("contactForm").addEventListener("submit", sendEmail);

// Function to send an email from contact us page
function sendEmail(event) {
  event.preventDefault();

  let form = document.getElementById("contactForm-contact");
  let formData = new FormData(form);

  // Get first name and last name values
  let firstName = document.getElementById("firstname").value.trim();
  let lastName = document.getElementById("lastname").value.trim();

  // Concatenate them into a full name
  let fullName = firstName + " " + lastName;

  // Append full name to FormData (assuming backend expects "name" field)
  formData.append("name", fullName);

  fetch("send_email.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      // document.getElementById("responseMessage").innerHTML = data;
      // document.getElementById("responseMessage").style.display = "block";
      document.getElementById("contactForm-contact").reset(); // Reset form after sending
    })
    .catch((error) => console.error("Error:", error));
}

document
  .getElementById("contactForm-contact")
  .addEventListener("submit", sendEmail);
