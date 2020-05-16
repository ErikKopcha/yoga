window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // slider
  // отвечает за слайд, который показывается в текущий момент
  let slidIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  showSlides();

  function showSlides(n) {
    // если мы дошли до конца длины слайдов,
    // то возвращаемся к первому слайду
    if (n > slides.length) {
      slidIndex = 1;
    }
    // если мы листаем назад, то после первого слайда
    // мы возвращаемся к последнему слайду в массиве
    if (n < 1) {
      slidIndex = slides.length;
    }
    // скрываем все слайды и класс активной точки
    slides.forEach((el) => el.style.display = 'none');
    dots.forEach((el) => el.classList.remove('dot-active'));
    // показываем нужный слайд и даем активную точку
    // slidIndex - 1, чтобы показать первый слайд
    // тк в массиве 1 === 0
    slides[slidIndex - 1].style.display = 'block';
    dots[slidIndex - 1].classList.add('dot-active');
  }

  // увеличивает параметер slidIndex
  function plusSlides(n) {
    showSlides(slidIndex += n);
  }

  // определяем текущий слайд и устанавливаем его
  function currentSlide(n) {
    showSlides(slidIndex = n);
  }

  // при нажатии на кнопку назад
  // мы уменьшаем наш индекс на -1
  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  // при нажатии на кнопку вперед
  // мы увеличиваем наш индекс на 1
  next.addEventListener('click', () => {
    plusSlides(1);
  });

  // реализация кликов на точки
  dotsWrap.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length + 1; i++) {
      // используем делегирование
      // узнаем элемент на который мы кликнули - target
      // + узнаем номер точки
      //dots.length + 1 - запускаем цикл на 1 раз больше, чтобы передать 4-ую точку
      //dots[i - 1] - из-за того, массив начинается с нуля
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
});