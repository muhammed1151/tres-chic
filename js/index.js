function toggle(button) {
  let buttons = document.querySelectorAll(".type");
  buttons.forEach(function (el) {
    if (el !== button) {
      el.nextElementSibling.classList.remove("show");
    }
  });
  button.nextElementSibling.classList.toggle("show");

  button.addEventListener("blur", function () {
    this.nextElementSibling.classList.remove("show");
  });
}

//search bar
let listItems = document.querySelectorAll("li");
let clearIcon = document.querySelector(".left-section .clear-icon ");
let searchBar = document.querySelector(".search-bar");
let style = document.createElement("style");
let input = searchBar.value;

document.head.appendChild(style);
listItems.forEach((li) => {
  if (li.textContent.toUpperCase().includes(input.toUpperCase())) {
    li.style.display = "";
  } else {
    li.style.display = "none";
  }
});

searchBar.addEventListener("focus", () => {
  style.innerHTML = `.search-bar:focus {
       outline: none;
       }`;

  clearIcon.style.display = " inline-block";
});

searchBar.addEventListener("blur", () => {
  if (!searchBar.value) {
    clearIcon.style.display = "none";
  }
});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.display = "none";
});
