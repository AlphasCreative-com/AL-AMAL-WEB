function redirectToContact(link) {
  let jobTitle = link.getAttribute("data-title");
  sessionStorage.setItem("jobTitle", jobTitle);
}
