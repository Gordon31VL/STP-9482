document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-accordeon]').forEach(function (container) {
    const btnOpen = container.querySelector('button[data-type="open"]');
    const btnClose = container.querySelector('button[data-type="close"]');
    const content = container.nextElementSibling;

    // Знаходимо секцію features_section
    const featuresSection = container.closest('.features_section');

    function toggleAccordeon() {
      const isVisible = content.getAttribute('data-visible-section') === 'true';
      content.setAttribute(
        'data-visible-section',
        isVisible ? 'false' : 'true'
      );
      if (isVisible) {
        btnOpen.style.display = '';
        btnClose.style.display = 'none';
        // Додаємо клас, коли закрито
        if (featuresSection) {
          featuresSection.classList.add('features_section--closed');
        }
      } else {
        btnOpen.style.display = 'none';
        btnClose.style.display = '';
        // Видаляємо клас, коли відкрито
        if (featuresSection) {
          featuresSection.classList.remove('features_section--closed');
        }
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

    // Синхронізуємо стан при завантаженні сторінки
    if (content.getAttribute('data-visible-section') === 'false') {
      if (featuresSection) {
        featuresSection.classList.add('features_section--closed');
      }
    } else {
      if (featuresSection) {
        featuresSection.classList.remove('features_section--closed');
      }
    }
  });
});
