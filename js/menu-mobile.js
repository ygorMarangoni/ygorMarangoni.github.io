const menuUl = document.querySelector(".menu-mobile ul");
const menuHamburguer = document.querySelector(".menu-mobile div span");
const menuButton = document.querySelector(".span-div");
const next = document.querySelector(".next");

function toShow() {
  menuUl.classList.toggle("active");
  menuHamburguer.classList.toggle("active");
  menuButton.classList.toggle("active");
  next.classList.toggle("active");
}
menuButton.addEventListener("click", toShow);
