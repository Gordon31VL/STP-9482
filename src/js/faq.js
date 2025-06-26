document.querySelectorAll('[data-toggle-btn]').forEach(btn => {
  btn.addEventListener('click', () => {
    const faqItem = btn.closest('[data-faq-item]');
    const popup = faqItem.querySelector('[data-popup]');
    const faqList = btn.closest('[data-faq-list]');
    const isExpanded = faqList.classList.contains('expanded');

    // Закриваємо всі інші
    document.querySelectorAll('[data-faq-list]').forEach(item => {
      item.classList.remove('expanded');
      const popup = item.querySelector('[data-popup]');
      popup?.classList.add('hidden');

      const otherBtn = item.querySelector('[data-toggle-btn]');
      otherBtn?.classList.remove('show-open');
      otherBtn?.classList.add('show-closed');
    });

    // Якщо була закрита — розкриваємо
    if (!isExpanded) {
      faqList.classList.add('expanded');
      popup.classList.remove('hidden');
      btn.classList.remove('show-closed');
      btn.classList.add('show-open');
    }
  });
});
