let isScrolling = false;

window.addEventListener('scroll', function() {
  if (!isScrolling) {
    window.requestAnimationFrame(function() {
      const overlay = document.getElementById('overlay');
      if (window.scrollY > 50) {
        overlay.style.visibility = 'visible';
      } else {
        overlay.style.visibility = 'hidden';
      }
      isScrolling = false;
    });
    isScrolling = true;
  }
});