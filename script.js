// Función que verifica si un elemento está visible en la ventana
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9
    );
  }
  
  // Seleccionamos todas las secciones con clase .section-center
  const sections = document.querySelectorAll('.section-center');
  
  function checkSections() {
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('show');
      }
    });
  }
  
  // Ejecutamos al cargar la página y cada vez que haces scroll
  window.addEventListener('load', checkSections);
  window.addEventListener('scroll', checkSections);
  
  // Formulario sigue igual (puedes mantener tu código de contacto)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
  
    if (nombre && email && mensaje) {
      alert(`Gracias por contactarme, ${nombre}. Te responderé pronto.`);
      this.reset();
    } else {
      alert('Por favor completa todos los campos.');
    }
  });
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');
  const icon = document.querySelector('.menu-icon');
  
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    icon.classList.toggle('open');
  });

  // Cierra el menú cuando se hace clic en un enlace del menú
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      icon.classList.remove('open');
    });
  });
  

  