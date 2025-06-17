const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

function toggleMenu() {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  iconOpen.classList.toggle('hidden', isOpen);
  iconClose.classList.toggle('hidden', !isOpen);
}

if (menuToggle && nav && iconOpen && iconClose) {
  menuToggle.addEventListener('click', toggleMenu);
}

// Animación de secciones al hacer scroll usando IntersectionObserver
const sections = document.querySelectorAll('.section-center');

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));
