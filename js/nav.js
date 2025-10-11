/* Menú Hamburguesa ------------------------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

/* Buscador Responsive -------------------- */
const searchToggle = document.getElementById("searchToggle");
const searchField = document.querySelector(".search-field");

searchToggle.addEventListener("click", () => {
    searchField.classList.toggle("active");
});