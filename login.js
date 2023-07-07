let button = document.getElementById("button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let error = document.getElementById("error");

  let userEmail = localStorage.getItem("email");
  let userPassword = localStorage.getItem("password");

  if (userEmail !== email.value && userPassword !== password.value) {
    error.style.display = "block";
    error.innerText = "Wrong Password and Email entry";
    email.style.border = "1px solid red";
    password.style.border = "1px solid red";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } /* else if (userEmail !== email.value || userPassword !== password.value) {
    error.style.display = "block";
    email.style.border = "1px solid red";
    password.style.border = "1px solid red";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } */ else if (userEmail !== email.value) {
    error.style.display = "block";
    error.innerText = "Incorrect user email";
    email.style.border = "1px solid red";
    password.style.border = "1px solid black";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } else if (userPassword !== password.value) {
    error.style.display = "block";
    error.innerText = "Password does not exist";
    email.style.border = "1px solid black";
    password.style.border = "1px solid red";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } else {
    setTimeout(() => {
      window.location.replace("main.html");
    }, 3000);
  }
});
