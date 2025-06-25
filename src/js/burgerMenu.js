const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const header = document.querySelector('[data-visible-header]')
openBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'true';
  header.dataset.visibleHeader = 'false';
});

closeBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'false';
  header.dataset.visibleHeader = 'true';
  console.log('close')
});

const navLinks = burgerMenuEl.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'false';
    header.dataset.visibleHeader = 'true';
  });
});