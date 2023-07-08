let input = document.getElementById("input");
let paragraph = document.getElementById("para");
let button = document.getElementById("button");
let events = document.getElementById("events");
let todo = document.getElementById("todo");
let undo = document.getElementById("undo");
let clear = document.getElementById("clear");
let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");
let cancel = document.getElementById("cancel");
let modal = document.querySelector(".modal");
let btnDiv = document.getElementById("btnDiv");

function displayModal() {
  modal.style.display = "flex";
}

function removeModal() {
  modal.style.display = "none";
}

const deleteUser = () => {
  localStorage.clear();
  setTimeout(() => {
    window.location.replace("index.html");
  }, 3000);
};

function logout() {
  setTimeout(() => {
    window.location.replace("login.html");
  }, 3000);
}

window.addEventListener("scroll", function () {
  let nav = document.querySelector(".nav");
  let winPix = window.scrollY;
  if (winPix > 200) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

function opened() {
  sidebar.style.width = "300px";
  menu.style.color = "transparent";
}

function cancelled() {
  sidebar.style.width = "0px";
  menu.style.color = "white";
}

let todoArr = [];

button.addEventListener("click", function (e) {
  e.preventDefault();
  let todoDiv = document.createElement("div");
  let heading = document.createElement("h1");
  let cancelBtn = document.createElement("button");
  todoDiv.appendChild(heading);
  todoDiv.appendChild(cancelBtn);
  heading.innerText = input.value;
  cancelBtn.innerText = "X";
  console.log(todoArr);

  if (input.value !== "") {
    todoArr.push(todoDiv);
    input.style.border = "block";
    todoArr.map((item, index) => {
      todo.appendChild(item);

      cancelBtn.onclick = function () {
        item.style.display = "none";
        let indexes = todoArr[index];
        console.log(index);
        undo.onclick = function () {
          if (undo.innerText === "Undo") {
            undo.innerText = "Redo";
          } else {
            undo.innerText = "Undo";
          }
          if (indexes.style.display === "flex") {
            todoArr.splice(index, 0, indexes);
            indexes.style.display = "flex";
          } else {
            indexes.style.display = "flex";
          }
        };
      };
    });
  } else {
    input.style.border = "1px solid red";
    alert("Input must have a value");
    setTimeout(() => {
      input.style.border = "1px solid white";
    }, 3000);
  }

  input.value = "";
});

clear.onclick = function () {
  location.reload();
};
