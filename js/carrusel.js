/* Carrusel ----------------------------- */

const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

// Clonamos el primer slide y lo agregamos al final
const firstClone = slides[0].cloneNode(true);
carousel.appendChild(firstClone);

let index = 0;
let isTransitioning = false;

function moveSlide(step = 1) {
  if (isTransitioning) return; // Evita clics rápidos
  isTransitioning = true;

  index++;
  carousel.style.transition = "transform 3s ease-in-out";
  carousel.style.transform = `translateX(-${index * 100}%)`;

  // Cuando llegamos al clon...
  if (index === totalSlides) {
    setTimeout(() => {
      carousel.style.transition = "none"; // quitamos animación
      index = 0; // volvemos al primer slide real
      carousel.style.transform = `translateX(0)`;
    }, 3000);
  }

  setTimeout(() => (isTransitioning = false), 500);
}

// autoplay
setInterval(() => moveSlide(1), 6000);