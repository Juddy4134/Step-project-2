const mobileMenuBtn = document.querySelector(".hmenu-mobile");
const mobileMenu = document.querySelector(".hmenu-mobile-list");
mobileMenuBtn.addEventListener("click",function() {
  mobileMenu.classList.toggle("active");
});