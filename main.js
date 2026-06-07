// Palm Club — main.js

function showToast(msg) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function () { t.classList.remove('show'); }, 3000);
}

function toggleMobileMenu() {
  var nav = document.querySelector('.nav-links');
  if (!nav) return;
  var isOpen = nav.classList.contains('mobile-open');
  if (isOpen) {
    nav.classList.remove('mobile-open');
    nav.removeAttribute('style');
  } else {
    nav.classList.add('mobile-open');
    Object.assign(nav.style, {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: '70px',
      left: '0',
      right: '0',
      background: 'var(--warm-white)',
      padding: '28px 32px',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      gap: '20px',
      zIndex: '99'
    });
  }
}

// Hero waitlist form (index page)
var heroForm = document.getElementById('hero-notify-form');
if (heroForm) {
  heroForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = this.querySelector('[name="name"]').value;
    showToast('Welcome to the club, ' + name + ' \uD83C\uDF34');
    this.reset();
    var notifyEl = document.getElementById('notify');
    if (notifyEl) notifyEl.scrollIntoView({ behavior: 'smooth' });
  });
}

// Big notify form (index page)
var notifyForm = document.getElementById('notify-form');
if (notifyForm) {
  notifyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = this.querySelector('[name="name"]').value;
    var wrap = document.getElementById('notify-form-wrap');
    var success = document.getElementById('notify-success');
    if (wrap) wrap.style.display = 'none';
    if (success) success.classList.add('show');
    showToast("You're on the list, " + name + ' \uD83C\uDF34');
  });
}

// Contact form
var contactForm = document.getElementById('contact-main-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var area = document.getElementById('contact-form-area');
    var success = document.getElementById('contact-success');
    if (area) area.style.display = 'none';
    if (success) success.classList.add('show');
    showToast('Message sent \uD83C\uDF34');
  });
}

// Footer newsletter
var footerForm = document.getElementById('footer-newsletter-form');
if (footerForm) {
  footerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    showToast("You're on the list \uD83C\uDF34");
    this.reset();
  });
}

// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    if (link.getAttribute('href') === window.location.pathname ||
        link.getAttribute('href') === window.location.pathname.replace(/\/$/, '') + '/') {
      link.classList.add('active');
    }
  });
});
