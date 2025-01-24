const hamburger = document.querySelector(".hamburger_icon");
const navLinks = document.querySelector(".mobile_nav_links");
const crossIcon = document.querySelector(".cross_icon")

const links = document.querySelectorAll(".mobile_nav_links a");

const mobNav = document.querySelector(".mobile_nav");

const navWrap = document.querySelector(".navbar_wrapper")

hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("transform");
})
crossIcon.addEventListener("click", ()=>{
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("transform");
})

links.forEach(element => {
    element.addEventListener("click", ()=>{
        navLinks.classList.toggle("hidden");
        navLinks.classList.toggle("transform");
});
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        mobNav.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 20px 16px -20px";
        navWrap.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 20px 16px -20px";
    } else {
        mobNav.style.boxShadow = "none";
        navWrap.style.boxShadow = "none";
    }
});