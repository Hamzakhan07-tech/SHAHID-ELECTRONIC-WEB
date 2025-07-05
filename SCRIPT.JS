// script.js

// Toggle Menu Function
function toggleMenu() {
  const nav = document.getElementById('navToggle');
  nav.classList.toggle('open');
}

// Carousel Auto Slide (Optional Manual/Enhanced)
const track = document.querySelector('.carousel-track');
let position = 0;
const slideWidth = window.innerWidth;
const totalSlides = track.children.length;

function autoSlide() {
  position++;
  if (position >= totalSlides) position = 0;
  track.style.transform = `translateX(-${position * slideWidth}px)`;
}

setInterval(autoSlide, 4000);

// Optional: Email Click Opens Mail Client
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
  link.addEventListener('click', () => {
    window.location.href = link.getAttribute('href');
  });
});
