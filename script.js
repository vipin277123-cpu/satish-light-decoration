console.log("Satish Light & Decoration website loaded");
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let event = document.getElementById("event").value;
  let message = document.getElementById("message").value;

  let text = `Name: ${name}
Phone: ${phone}
Date: ${date}
Event: ${event}
Message: ${message}`;

  let url = `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
});
