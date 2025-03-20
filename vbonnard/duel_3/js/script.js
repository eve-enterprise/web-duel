// script.js

// 1) Créer quelques boules noires dans le header (ou .title)
const headerTitle = document.querySelector('header.title');
const numberOfCircles = 5; // par exemple 5 boules

for (let i = 0; i < numberOfCircles; i++) {
  const circle = document.createElement('div');
  circle.classList.add('cursor-circle');
  headerTitle.appendChild(circle);
}

// 2) Faire suivre le curseur
document.addEventListener('mousemove', (e) => {
  const circles = document.querySelectorAll('.cursor-circle');
  circles.forEach((circle, index) => {
    // Décalage (pour un effet de traîne)
    const delay = index * 20;
    setTimeout(() => {
      circle.style.left = e.pageX + 'px';
      circle.style.top = e.pageY + 'px';
    }, delay);
  });
});
