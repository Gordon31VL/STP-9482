document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-accordeon]').forEach(function (container) {
    const btnOpen = container.querySelector('button[data-type="open"]');
    const btnClose = container.querySelector('button[data-type="close"]');
    const btns = [btnOpen, btnClose];
    const content = container.nextElementSibling;

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const isVisible =
          content.getAttribute('data-visible-section') === 'true';
        content.setAttribute(
          'data-visible-section',
          isVisible ? 'false' : 'true'
        );
        // Перемикаємо display кнопок
        if (isVisible) {
          btnOpen.style.display = '';
          btnClose.style.display = 'none';
        } else {
          btnOpen.style.display = 'none';
          btnClose.style.display = '';
        }
      });
    });
  });
});
