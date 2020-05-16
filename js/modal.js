window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // вызов модального окна
  function showModal() {
    let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      overlaySuccessClose = document.querySelector('.overlay__success-close'),
      overlaySuccess = document.querySelector('.overlay__success'),
      descriptionBtn = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function () {
      overlay.style.display = 'block';
      // this - наша кнопка, на которую нажимаем
      this.classList.add('more-splash');
      // запрет на прокрутку страницы при открытым модальным окном
      document.body.style.overflow = 'hidden';
    });

    // вызов модалки на табах
    descriptionBtn.forEach((el) => {
      el.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
      });
    });

    close.addEventListener('click', function () {
      overlay.style.display = "none";
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
    });

    overlaySuccessClose.addEventListener('click', function () {
      overlaySuccess.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        overlay.style.display = "none";
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
      }
    });
  }

  showModal();
});