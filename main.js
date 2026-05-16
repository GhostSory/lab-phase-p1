/* ── NovaCore · main.js ─────────────────────────── */

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function submitLandingForm(e) {
  e.preventDefault();
  const msg = document.getElementById('landingSuccess');
  msg.style.display = 'block';
  e.target.reset();
  setTimeout(() => { msg.style.display = 'none'; }, 8000);
}

function submitContactForm(e) {
  e.preventDefault();
  const msg = document.getElementById('contactSuccess');
  msg.style.display = 'block';
  e.target.reset();
  setTimeout(() => { msg.style.display = 'none'; }, 8000);
}

document.addEventListener('click', (e) => {
  const nav = document.getElementById('navLinks');
  const btn = document.querySelector('.menu-toggle');
  if (nav && nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) {
    nav.classList.remove('open');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('navLinks')?.classList.remove('open');
      }
    });
  });
});
