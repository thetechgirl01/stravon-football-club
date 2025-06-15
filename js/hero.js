const section = document.getElementById('heroSection');
  const flash = document.getElementById('flashOverlay');

const images = [
  "url('../images/hero.png')",
  "url('../images/hero.png')",
  "url('../images/hero.png')"
];


  let current = 0;

  function changeBackground() {
    // Start flash
    flash.classList.remove('opacity-0');
    flash.classList.add('opacity-100');

    setTimeout(() => {
      // Switch background after flash
      current = (current + 1) % images.length;
      section.style.backgroundImage = images[current];

      // End flash
      flash.classList.remove('opacity-100');
      flash.classList.add('opacity-0');
    }, 500); // Flash duration (0.5s)
  }

  // Initial background
  section.style.backgroundImage = images[current];

  // Loop every 4s
  setInterval(changeBackground, 4000);