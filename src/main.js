document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelectorAll('button[data-toggle="section"]')
    .forEach(function (btn) {
      btn.addEventListener('click', function () {
        let container = btn.closest('[data-accordeon]');
        if (!container) container = btn.parentElement;

        let content = container.nextElementSibling;
        while (content && !content.hasAttribute('data-visible-section')) {
          content = content.nextElementSibling;
        }
        if (!content) return;

        const isVisible =
          content.getAttribute('data-visible-section') === 'true';
        content.setAttribute(
          'data-visible-section',
          isVisible ? 'false' : 'true'
        );

        const use = btn.querySelector('use');
        if (use) {
          use.setAttribute(
            'href',
            isVisible
              ? '/img/sprite.svg#accordeon_open'
              : '/img/sprite.svg#accordeon_close'
          );
        }
      });
    });
});
