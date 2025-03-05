document.addEventListener("DOMContentLoaded", function () {
  let form1 = document.getElementById("contactForm");
  let form2 = document.getElementById("contactForm-contact");
  let form3 = document.getElementById("contactForm-enquiries");

  if (form1) {
    form1.addEventListener("submit", sendEmail);
  }
  if (form2) {
    form2.addEventListener("submit", sendEmailfromContact);
  }
  if (form3) {
    form3.addEventListener("submit", sendEmailFromEnquiries);
  }
});

// Function to send an email form home page
function sendEmail(event) {
  event.preventDefault();

  let form = document.getElementById("contactForm");
  let formData = new FormData(form);

  fetch("php/send_email.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      // console.log(data);
      // document.getElementById("responseMessage").innerHTML = data;
      // document.getElementById("responseMessage").style.display = "block";
      document.getElementById("contactForm").reset(); // Reset form after sending
    })
    .catch((error) => console.error("Error:", error));
}

// Function to send an email from contact us page
function sendEmailfromContact(event) {
  event.preventDefault();

  let form = document.getElementById("contactForm-contact");
  let formData = new FormData(form);

  formData.append("subject", "Contact Form Submission");

  // Get first name and last name from FormData
  let firstName = formData.get("firstname")?.trim() || "";
  let lastName = formData.get("lastname")?.trim() || "";

  // Concatenate them into a full name
  let fullName = `${firstName} ${lastName}`.trim();
  formData.append("name", fullName); // Add full name to formData

  // Append full name to FormData (assuming backend expects "name" field)
  formData.append("name", fullName);

  fetch("php/send_email.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      // console.log(data);
      // document.getElementById("responseMessage").innerHTML = data;
      // document.getElementById("responseMessage").style.display = "block";
      document.getElementById("contactForm-contact").reset(); // Reset form after sending
    })
    .catch((error) => console.error("Error:", error));
}


function sendEmailFromEnquiries(event) {
  event.preventDefault(); // Prevent default form submission

  let form = document.getElementById("contactForm-enquiries");
  let formData = new FormData(form);

  // Concatenate first name and last name into "full_name"
  let firstName = formData.get("firstname") || "";
  let lastName = formData.get("lastname") || "";
  let fullName = `${firstName} ${lastName}`.trim();

  // Append "full_name" to FormData
  formData.append("name", fullName);

  // Send data via fetch()
  fetch("php/send_enquiries.php", {
      method: "POST",
      body: formData,
  })
  .then(response => response.text()) // Handle response as text
  .then(data => {
      // console.log("PHP Response:", data);
      // alert("Message Sent Successfully!");
      form.reset(); // Reset form after submission
  })
  .catch(error => console.error("Fetch Error:", error));
}


