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
