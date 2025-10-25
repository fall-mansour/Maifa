
document.addEventListener('DOMContentLoaded', () => {
  // Liste des images à faire défiler
  const imagePaths = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg',
    'assets/img4.jpg'
  ];

  const slideshow = document.querySelector('.slideshow');

  // Création automatique des balises <img>
  imagePaths.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    slideshow.appendChild(img);
  });

  // Défilement des images
  const images = slideshow.querySelectorAll('img');
  let current = 0;
  images[current].classList.add('active');

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 5000); // changement toutes les 5 secondes
});
