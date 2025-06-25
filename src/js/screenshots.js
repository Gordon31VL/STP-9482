document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-screenshot-modal]');
  const modalImg = document.querySelector('[data-screenshot-modal-img]');
  const backdrop = document.querySelector('[data-screenshot-backdrop]');
  const screenshots = document.querySelectorAll('[data-screenshot-img]');

  screenshots.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      if (modal.classList.contains('active') && modalImg.src === img.src) {
        closeModal();
      } else {
        openModal(img);
      }
    });
  });

  function openModal(img) {
    modalImg.src = img.src;
    modalImg.srcset = img.srcset || '';
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
    }, 300);
  }

  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (modal.classList.contains('active') && e.key === 'Escape') {
      closeModal();
    }
  });
});
