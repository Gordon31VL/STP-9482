document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-accordeon]').forEach(function (container) {
    const btnOpen = container.querySelector('button[data-type="open"]');
    const btnClose = container.querySelector('button[data-type="close"]');
    const content = container.nextElementSibling;

    // Знаходимо найближчу секцію (будь-яку) для додавання/видалення класу
    const section = container.closest('[data-section]');

    function toggleAccordeon() {
      const isVisible = content.getAttribute('data-visible-section') === 'true';
      content.setAttribute(
        'data-visible-section',
        isVisible ? 'false' : 'true'
      );

      if (isVisible) {
        btnOpen.style.display = '';
        btnClose.style.display = 'none';
        if (section) section.classList.add('section--closed');
      } else {
        btnOpen.style.display = 'none';
        btnClose.style.display = '';
        if (section) section.classList.remove('section--closed');
      }
    }

    container.addEventListener('click', function (e) {
      if (e.target.closest('button')) return;
      toggleAccordeon();
    });

    [btnOpen, btnClose].forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleAccordeon();
      });
    });

    // Ініціалізація класу при завантаженні
    if (content.getAttribute('data-visible-section') === 'false') {
      if (section) section.classList.add('section--closed');
    } else {
      if (section) section.classList.remove('section--closed');
    }
  });
});
