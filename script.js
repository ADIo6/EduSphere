const hamburger = document.querySelector(".hamburger_icon");
const navLinks = document.querySelector(".mobile_nav_links");
const crossIcon = document.querySelector(".cross_icon")


hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("transform");
})
crossIcon.addEventListener("click", ()=>{
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("transform");
})