import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('[data-swiper1]');
  if (!swiperEl) return; // Зупиняємо виконання, якщо слайдер не знайдено

  // Знаходимо найближчий спільний контейнер для слайдера та навігації
  const swiperContainer = swiperEl.closest('.how_to_play_box_swiper');
  const contentEl = document.querySelector('[data-howToPlaySliderText]');

  // Масив з унікальним контентом для слайдів
  const slideContent = [
    {
      title: 'Lorem ipsum tortor laoreet facilisi facilisis.',
      text: 'Lorem ipsum dolor sit amet consectetur. Fames lobortis id feugiat nisl fermentum. Neque vel tortor lacus sollicitudin massa vitae tellus odio. Nullam dui quam mollis massa mauris vitae tellus. Tincidunt id massa consectetur facilisi quam pellentesque eleifend. Auctor rhoncus varius mauris facilisi suspendisse sit.',
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

  // Функція для оновлення тексту під слайдером
  function updateContent(index) {
    if (contentEl) {
      // Використовуємо оператор ділення за модулем для циклічного отримання контенту
      const contentIndex = index % slideContent.length;
      const content = slideContent[contentIndex];
      if (content) {
        contentEl.innerHTML = `
          <h4 class="how_to_play_slider_title subtitle">${content.title}</h4>
          <p class="how_to_play_slider_paragraph ">${content.text}</p>
        `;
      } else {
        contentEl.innerHTML = '';
      }
    }
  }

  const swiper = new Swiper(swiperEl, {
    modules: [Navigation, Pagination, EffectCoverflow],
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    initialSlide: 1, // Починаємо з другого слайда

    navigation: {
      // Шукаємо кнопки всередині спільного контейнера
      nextEl: swiperContainer.querySelector('[data-next-button1]'),
      prevEl: swiperContainer.querySelector('[data-prev-button1]'),
    },
    pagination: {
      el: swiperContainer.querySelector('[data-pagination1]'),
      clickable: true,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        let bullets = '';
        const realTotal = slideContent.length;
        const activeBulletIndex = swiper.realIndex % realTotal;

        for (let i = 0; i < realTotal; i++) {
          const className =
            i === activeBulletIndex
              ? 'swiper-pagination-bullet swiper-pagination-bullet-active'
              : 'swiper-pagination-bullet';
          bullets += `<span class="${className}" data-bullet-index="${i}"></span>`;
        }
        return bullets;
      },
    },

    on: {
      init: function () {
        updateContent(this.realIndex);
        // Обробка кліків по кастомній пагінації
        this.pagination.el.addEventListener('click', e => {
          if (e.target.matches('[data-bullet-index]')) {
            const index = parseInt(
              e.target.getAttribute('data-bullet-index'),
              10
            );
            this.slideToLoop(index);
          }
        });
      },
      slideChange: function () {
        updateContent(this.realIndex);
        // Оновлюємо пагінацію при зміні слайда
        this.pagination.render();
        this.pagination.update();
      },
    },
    breakpoints: {
      1200: {
        effect: 'coverflow',
        slidesPerView: 'auto',
        spaceBetween: -80, // Ваш від'ємний відступ
        coverflowEffect: {
          rotate: 0,
          stretch: 0, // Прибираємо розтягнення для щільного прилягання
          depth: 150,
          modifier: 1,
          slideShadows: false,
        },
      },
    },
  });
});
