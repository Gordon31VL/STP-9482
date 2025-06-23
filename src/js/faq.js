const buttons = document.querySelectorAll('.toggleBtn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const faqItem = btn.closest('.faq-item');
    const popup = faqItem.querySelector('.popup');

    // Закриваємо всі інші попапи
    document.querySelectorAll('.popup').forEach(el => {
      if (el !== popup) el.classList.add('hidden');
    });

    // Перемикаємо видимість popup
    popup.classList.toggle('hidden');

    // Знаходимо SVG усередині кнопки
    const closedIcon = btn.querySelector('.icon-closed');
    const openIcon = btn.querySelector('.icon-open');

    // Перемикаємо іконки
    closedIcon.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
  });
});
