// js/script.js - minimal booking saver
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // simple validation fallback
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
