// tab navigation
const headers = document.querySelectorAll(".header");
const tabBody = document.querySelector(".tab-content");

// top menu navigation
const display_dropdown = document.querySelector(".display-dropdown");
const dropdown_content = document.querySelector(".dropdown-content");
const tab = document.querySelector(".tab");

// side menu navigation
const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.querySelector(".menu")


display_dropdown.addEventListener("click", () => {
  if (dropdown_content.style.display === "none") {
    dropdown_content.style.display = "block";
  } else {
    dropdown_content.style.display = "none";
  }
});

tab.addEventListener("click", () => {
  dropdown_content.style.display = "none";
});

let i;
headers.forEach((header, i) => {
  header.addEventListener("click", () => {
    removeActive();
    header.classList.add("active");
    tabBody.style.marginTop = `-${i * 90}vh`;
  });
});

function removeActive() {
  headers.forEach((header) => {
    header.classList.remove("active");
  });
}

// side navigation function

open.addEventListener("click", () => {
  menu.classList.add("show");
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
  open.style.display = "block";
  close.style.display = "none";
});