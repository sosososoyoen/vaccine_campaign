const menuBtn = document.querySelector(".btn_mobile-menu");
const menus = document.querySelector(".header__menu")
menuBtn.addEventListener("click",()=>{
    menus.classList.toggle("menu-slide")
})
