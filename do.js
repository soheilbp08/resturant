const menu = document.getElementById("menu");
const menu_container = document.getElementById("menu-container") 
menu.addEventListener("click", function(){
const next = this.nextElementSibling
next.classList.toggle("hidden")
}
);
