window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // гамбургер меню
  let menuBtn = document.getElementById('nav-icon2'),
    menuLinks = document.querySelectorAll('.nav__item'),
    header = document.querySelector('header');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    header.classList.toggle('hidden');
    document.body.classList.toggle('overflow');
  });

  menuLinks.forEach((el) => {
    el.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      header.classList.toggle('hidden');
      document.body.classList.toggle('overflow');
    });
  });

  window.addEventListener('keydown', function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      menuBtn.classList.remove('open');
      header.classList.add('hidden');
      document.body.classList.remove('overflow');
    }
  });
});