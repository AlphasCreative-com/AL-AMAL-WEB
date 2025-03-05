document.addEventListener("DOMContentLoaded", function () {
  let jobTitle = sessionStorage.getItem("jobTitle"); // Retrieve job title from localStorage

  if (jobTitle) {
    let select = document.getElementById("jobstitles");
    if (select) {
      for (let option of select.options) {
        if (option.value === jobTitle) {
          option.selected = true;
          break;
        }
      }
    }
  }
});
