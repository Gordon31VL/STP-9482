import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('[data-swiper1]');
  // Знаходимо контейнер, куди будемо вставляти контент
  const contentEl = document.querySelector('[data-howToPlaySliderText]');

  // Створюємо масив об'єктів із заголовками та текстами для кожного слайда
  const slideContent = [
    {
      title: 'Basic Gameplay',
      text: 'Tap to move tiles on the map into the Display Bar. 3 tiles of the same kind will be eliminated.',
    },
    {
      title: 'Use Hints',
      text: "Can't find collectible tiles? Use the Hint item. It will show useful hints.",
    },
    {
      title: 'Rearrange Tiles',
      text: 'Oh? Bad order? Use the Refresher item to rearrange the tiles.',
    },
  ];

  // Функція для оновлення заголовка та тексту
  function updateContent(index) {
    if (contentEl) {
      const content = slideContent[index];
      if (content) {
        // Вставляємо HTML з заголовком та параграфом
        contentEl.innerHTML = `
          <h4 class="how_to_play_slider_title">${content.title}</h4>
          <p class="how_to_play_slider_paragraph">${content.text}</p>
        `;
      } else {
        contentEl.innerHTML = ''; // Очищуємо, якщо даних немає
      }
    }
  }

  const swiper = new Swiper(swiperEl, {
    // Налаштування за замовчуванням (для мобільних)
    modules: [Navigation, Pagination, EffectCoverflow],
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
      nextEl: swiperEl.querySelector('[data-next-button1]'),
      prevEl: swiperEl.querySelector('[data-prev-button1]'),
    },
    pagination: {
      el: swiperEl.querySelector('[data-pagination1]'),
      clickable: true,
    },
    on: {
      init: function () {
        updateContent(this.realIndex);
      },
      slideChange: function () {
        updateContent(this.realIndex);
      },
    },
  });
});
