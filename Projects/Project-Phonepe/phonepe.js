let bars = document.querySelector(".Bars");
let links = document.querySelector(".nav-links");

bars.addEventListener("click",()=> {
    links.classList.toggle("nav-show");
});
