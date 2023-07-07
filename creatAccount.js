let button = document.getElementById("button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let error = document.getElementById("error");
  let input = document.querySelectorAll(".input");
  let smallPassword = document.getElementById("smallPassword");

  let userEmail = localStorage.getItem("email");
  let userPassword = localStorage.getItem("password");

  if (
    email.value === "" &&
    password.value === "" &&
    confirmPassword.value === ""
  ) {
    error.style.display = "block";
    error.innerText = "Error! Fill the form to proceed";
    email.style.border = "1px solid red";
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      confirmPassword.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } else if (email.value === "") {
    error.style.display = "block";
    error.innerText = "Error! Email entry is empty";
    email.style.border = "1px solid red";
    password.style.border = "1px solid black";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } else if (password.value === "") {
    error.style.display = "block";
    error.innerText = "Error! Password entry is empty";
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid black";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } else if (confirmPassword.value === "") {
    error.style.display = "block";
    error.innerText = "Error! ConfirmPassword entry is empty";
    password.style.border = "1px solid black";
    confirmPassword.style.border = "1px solid red";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } else if (userEmail !== email.value) {
    error.style.display = "block";
    error.innerText = "Wrong email address";
    email.style.border = "1px solid red";
    password.style.border = "1px solid red";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } else if (password.value !== confirmPassword.value) {
    error.style.display = "block";
    error.innerText = "Password does not match with Confirm Password";
    email.style.border = "1px solid black";
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      confirmPassword.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } else if (password.value.length < 8) {
    smallPassword.style.display = "block";
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
    setTimeout(() => {
      smallPassword.style.display = "none";
      password.style.border = "1px solid black";
      confirmPassword.style.border = "1px solid black";
    }, 5000);
  } else {
    setTimeout(() => {
      window.location.replace("http://127.0.0.1:5500/main.html");
    }, 3000);
  }
});
