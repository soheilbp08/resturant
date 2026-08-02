const menu = document.getElementById("menu");
const menuContainer = document.getElementById("menu-container");

menu.addEventListener("click", function(e) {
  e.stopPropagation();
  menuContainer.classList.toggle("hidden");
});


menuContainer.addEventListener("click", function(e) {
  e.stopPropagation();
});


document.addEventListener("click", function() {
  menuContainer.classList.add("hidden");
});