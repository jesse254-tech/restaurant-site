/* Reservation form */
const form = document.getElementById('reserveForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('reserveMsg').classList.remove('d-none');
    form.reset();
  });
}

/* Navbar background on scroll */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* Close the mobile menu on link tap or when tapping outside */
const navMenu = document.getElementById('navMenu');
if (navMenu && window.bootstrap) {
  const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu, { toggle: false });
  navMenu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) collapse.hide();
    });
  });
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('show') && !e.target.closest('#mainNav')) {
      collapse.hide();
    }
  });
}
