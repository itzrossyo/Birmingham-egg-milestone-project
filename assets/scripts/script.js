const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};


document.getElementById("contact-form").addEventListener("submit", function (event) {
            event.preventDefault();
            var firstName = document.getElementById("first-name").value;
            var lastName = document.getElementById("last-name").value;
            var message = document.getElementById("message").value;
            var contactMethod = document.getElementById("contact-method").value;
            var email = "rossespley@gmail.com";

            var confirmationMessage =
              "Sent to " + email + "\n\n" + "First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Message: " + message + "\n" + "Contact Method: " + contactMethod;

            alert(confirmationMessage);
          });