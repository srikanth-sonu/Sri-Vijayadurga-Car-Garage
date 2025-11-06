console.log('SCRIPT LOADED —', new Date().toISOString());
/* minimal starter (copy paste from previous instructions) */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // same logic...
    const name = (document.getElementById('name') || {}).value || '';
    const phone = (document.getElementById('phone') || {}).value || '';
    const service = (document.getElementById('service') || {}).value || '';
    const date = (document.getElementById('date') || {}).value || '';
    const message = (document.getElementById('message') || {}).value || '';
    const email = (document.getElementById('email') || {}).value || '';
    if (!name || !phone || !service || !date) {
      alert('Please fill required fields (Name, Phone, Service, Date).');
      return;
    }
    const booking = { name, phone, email, service, date, message, createdAt: new Date().toISOString() };
    const key = 'sv_bookings';
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    list.push(booking);
    localStorage.setItem(key, JSON.stringify(list));
    alert('Booking saved locally. You can view it at admin.html (for now).');
    form.reset();
  });
});


// highlight active nav link automatically
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop(); // current file name
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// smooth scrolling for same-page anchor links
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});


