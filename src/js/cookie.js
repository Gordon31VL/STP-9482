document.addEventListener('DOMContentLoaded', () => {
  const cookieBox = document.querySelector('[data-cookie-box]');
  const acceptBtn = document.querySelector('[data-accept]');
  const declineBtn = document.querySelector('[data-decline]');

  if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieBox.style.display = 'none';
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBox.style.display = 'none';
  });

  declineBtn.addEventListener('click', () => {
    cookieBox.style.display = 'none';
  });
});
