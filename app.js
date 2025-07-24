document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const username = document.getElementById("username");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameVal = username.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();

    if (usernameVal === "") {
      alert("Please enter your username.");
      return;
    }

    if (!/^[0-9]{10,15}$/.test(phoneVal)) {
      alert("Please enter a valid phone number (10-15 digits).");
      return;
    }

    if (passwordVal.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    window.location.href = "index.html";
  });
});
//-------------------------------------------------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();

    if (usernameVal === "") {
      alert("Please enter your username.");
      return;
    }

    if (passwordVal.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    window.location.href = "index.html";
  });
});



//-------------------------------------------------------------------------------//
function toggleFavorite(btn) {
      const icon = btn.querySelector('i');
      icon.classList.toggle('active');}