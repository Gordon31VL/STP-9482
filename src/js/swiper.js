import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, EffectCoverflow, Autoplay, EffectCreative } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('[data-swiper1]');

  const swiperContainer = swiperEl.closest('[data-swiper-container1]');
  const contentEl = document.querySelector('[data-howToPlaySliderText]');

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

  function updateContent(index) {
    if (contentEl) {
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
    initialSlide: 1,

    navigation: {
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
        this.pagination.render();
        this.pagination.update();
      },
    },
    breakpoints: {
      1200: {
        effect: 'coverflow',
        slidesPerView: 'auto',
        spaceBetween: -80,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        },
      },
    },
  });

  const swiperEl2 = document.querySelector('[data-swiper2]');
  if (swiperEl2) {
    const swiperContainer2 = swiperEl2.closest('[data-swiper-container2]');

    const swiper2 = new Swiper(swiperEl2, {
      modules: [Navigation],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      height: 359,
      navigation: {
        nextEl: '[data-next-button2]',
        prevEl: '[data-prev-button2]',
      },

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
          width: 1057,
        },
      },
    });
  }

  const swiperEl3 = document.querySelector('[data-swiper3]');
  if (swiperEl3) {
    const swiper3 = new Swiper(swiperEl3, {
      modules: [Navigation, Autoplay],
      loop: true,
      slidesPerView: 1.2,
      spaceBetween: 16,
      centeredSlides: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      initialSlide: Math.floor(10 / 2),
      breakpoints: {
        1200: {
          slidesPerView: 3.5,
          spaceBetween: -136,
          initialSlide: Math.floor(10 / 2),
          centeredSlides: true,
        },
      },
      on: {
        slideChange: function () {
          setPrevNextClasses(this);
        },
        init: function () {
          setPrevNextClasses(this);
        },
      },
    });

    function setPrevNextClasses(swiper) {
      swiper.slides.forEach(slide => {
        slide.removeAttribute('data-slide-prev-prev');
        slide.removeAttribute('data-slide-next-next');
      });

      // Отримуємо індекси
      const slidesCount = swiper.slides.length;
      const active = swiper.activeIndex;
      const prev = (active - 1 + slidesCount) % slidesCount;
      const prevPrev = (active - 2 + slidesCount) % slidesCount;
      const next = (active + 1) % slidesCount;
      const nextNext = (active + 2) % slidesCount;

      swiper.slides[prevPrev]?.setAttribute('data-slide-prev-prev', '');
      swiper.slides[nextNext]?.setAttribute('data-slide-next-next', '');
    }
  }
});