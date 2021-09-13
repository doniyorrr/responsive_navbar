const menu = document.querySelector("#mobile_menu");
const menuLink = document.querySelector(".nav_menu");
console.log(menu);
console.log(menuLink);

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLink.classList.toggle("active");
});
