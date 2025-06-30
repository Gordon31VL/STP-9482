document.querySelectorAll('[data-toggle-btn]').forEach(btn => {
  btn.addEventListener('click', () => {
    const faqItem = btn.closest('[data-faq-item]');
    const popup = faqItem.querySelector('[data-popup]');
    const faqList = btn.closest('[data-faq-list]');
    const isExpanded = faqList.getAttribute('data-expanded') === 'true';

    // Закриваємо всі інші
    document.querySelectorAll('[data-faq-list]').forEach(item => {
      item.setAttribute('data-expanded', 'false');
      const popup = item.querySelector('[data-popup]');
      popup?.setAttribute('data-visible', 'false');

      const otherBtn = item.querySelector('[data-toggle-btn]');
      otherBtn?.setAttribute('data-state', 'closed');
    });

    // Якщо була закрита — розкриваємо
    if (!isExpanded) {
      faqList.setAttribute('data-expanded', 'true');
      popup.setAttribute('data-visible', 'true');
      btn.setAttribute('data-state', 'open');
    }
    btn.blur();
  });
});
