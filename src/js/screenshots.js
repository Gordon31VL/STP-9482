document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-screenshot-modal]');
  const modalImg = document.querySelector('[data-screenshot-modal-img]');
  const backdrop = document.querySelector('[data-screenshot-backdrop]');
  const screenshots = document.querySelectorAll('[data-screenshot-img]');

  screenshots.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      if (modal.classList.contains('active') && modalImg.src === img.src) {
        closeModal();
      } else {
        openModal(img, index + 1);
      }
    });
  });

  function openModal(img, index) {
    modalImg.src = img.src;
    modalImg.srcset = img.srcset || '';
    modalImg.setAttribute('data-screenshot-index', index);
    modal.style.display = 'flex';

    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
  }

  function closeModal() {
    modal.classList.remove('active');

    setTimeout(() => {
      modal.style.display = 'none';
      modalImg.src = '';
      modalImg.removeAttribute('data-screenshot-index');
    }, 300);
  }

  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (modal.classList.contains('active') && e.key === 'Escape') {
      closeModal();
    }
  });
});
