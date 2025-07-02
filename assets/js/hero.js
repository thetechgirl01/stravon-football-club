document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('closeBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    // Toggle mobile menu
    function toggleMenu() {
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        
        if (isOpen) {
            // Close menu
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            body.classList.remove('overflow-hidden');
        } else {
            // Open menu
            mobileMenu.classList.remove('translate-x-full', 'hidden');
            mobileMenu.classList.add('translate-x-0');
            body.classList.add('overflow-hidden');
        }
    }

    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Close menu on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
            body.classList.remove('overflow-hidden');
        }
    });
});

// ========== Countdown Timer ==========



const countdown = () => {
  const endTime = new Date("2025-07-01T20:00:00").getTime();
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const diff = endTime - now;

    if (diff <= 0) {
      clearInterval(interval);
      ["days", "hours", "minutes", "seconds"].forEach(id => {
        document.getElementById(id).textContent = "00";
      });
      return;
    }

    const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
};
countdown();


// ========== Footer Year ==========
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
  "url('assets/images/players/herog.png')",
  "url('assets/images/hero2.png')",
  "url('assets/images/players/player1.png')"
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

// Set initial background
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

function toggleMenu() {
  const isOpen = mobileMenu.classList.contains('translate-x-0');
  
  if (isOpen) {
    // Close menu
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    body.classList.remove('overflow-hidden');
  } else {
    // Open menu
    mobileMenu.classList.remove('translate-x-full', 'hidden');
    mobileMenu.classList.add('translate-x-0');
    body.classList.add('overflow-hidden');
  }
}