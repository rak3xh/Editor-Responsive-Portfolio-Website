(function () {
  emailjs.init({ publicKey: "ULRW25vqiHb3mBq9Z" }); // Replace with your EmailJS user ID
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Service ID, Template ID, and Form Fields
    emailjs
      .sendForm("service_n02obad", "template_91tou84", this)
      .then(alert("Email Sent!!!"));
  });
