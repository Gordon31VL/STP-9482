document.querySelectorAll('.toggleBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const faqItem = btn.closest('.faq-item');
    const popup = faqItem.querySelector('.popup');
    const faqList = btn.closest('.faq-list');
    const isExpanded = faqList.classList.contains('expanded');

    // Закриваємо всі інші
    document.querySelectorAll('.faq-list').forEach(item => {
      item.classList.remove('expanded');
      const popup = item.querySelector('.popup');
      popup?.classList.add('hidden');

      const otherBtn = item.querySelector('.toggleBtn');
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
