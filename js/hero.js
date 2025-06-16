// ========== Footer Year Auto Update ==========
document.getElementById('year').textContent = new Date().getFullYear();


// ========== Lightbox Logic ==========
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.add('hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});


// ========== Background Image Slider ==========
const section = document.getElementById('heroSection');
const flash = document.getElementById('flashOverlay');

const images = [
  "url('images/hero.png')",
  "url('images/hero2.png')",
  "url('images/players/player1.png')"
];

let current = 0;

function changeBackground() {
  // Start flash effect
  flash.classList.remove('opacity-0');
  flash.classList.add('opacity-100');

  setTimeout(() => {
    current = (current + 1) % images.length;
    section.style.backgroundImage = images[current];

    // End flash
    flash.classList.remove('opacity-100');
    flash.classList.add('opacity-0');
  }, 500); // Flash duration
}

// Initial background
section.style.backgroundImage = images[current];

// Auto-change background every 4s
setInterval(changeBackground, 4000);


// ========== Dropdown Toggle ==========
function toggleDropdown() {
  const menu = document.getElementById('dropdown-menu');
  menu.classList.toggle('hidden');
}

window.addEventListener('click', function (e) {
  const menu = document.getElementById('dropdown-menu');
  const button = e.target.closest('button');
  if (!e.target.closest('#dropdown-menu') && !button) {
    menu.classList.add('hidden');
  }
});
