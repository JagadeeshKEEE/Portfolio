document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 1700, // Duration of animations
    once: false, // Animation should happen every time
    easing: 'ease-in-out', // Easing function for animations
  });
  // Typed.js for the typing effect
  var typed = new Typed('#t', {
    strings: ['Frontend Developer', 'Python Developer'],
    typeSpeed: 50,
    backDelay: 1000,
    loop: true
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
