
  function animateButton(btn) {
    btn.classList.remove('scale-95');
    void btn.offsetWidth; // trigger reflow to restart animation
    btn.classList.add('scale-95');
    setTimeout(() => btn.classList.remove('scale-95'), 150); // remove after animation
  }
