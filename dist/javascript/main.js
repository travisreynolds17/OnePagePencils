// slide-in menu JS

// get elements

const menuBtn = document.querySelector(".menu-button");
const slideMenu = document.querySelector(".slide-menu");

// add event listener

menuBtn.addEventListener("click", toggleMenu);

// set initial menuState

let menuVisible = false;

// functions

function toggleMenu() {
  // toggles visibility of slide-in menu
  if (!menuVisible) {
    slideMenu.classList.add("show");
    menuVisible = true;
  } else {
    slideMenu.classList.remove("show");
    menuVisible = false;
  }
}
