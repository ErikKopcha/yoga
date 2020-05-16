window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // timer 
  let deadline = '2025.10.10';

  // узнаем промежуток времени между временем в данный момент и дедлайном
  function getTimeRemaining(endtime) {
    // превращает любую дату в количество миллисекунд, 
    // Date.parse(new Date()) здесь мы узнаем текущую дату, 
    // когда пользователь зашел на страницу
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60), // получаем секунды
      minutes = Math.floor((t / 1000 / 60) % 60), // получаем минуты
      hours = Math.floor((t / (1000 * 60 * 60))); // получаем часы
    // если нужны дни
    // hours = Math.floor((t / 1000 / 60 / 60) % 24),
    // days = Math.floor((t / (1000 * 60 * 60 * 24))); // получаем дни

    // возвращает полное время, часы, минуты и секунды
    // которые мы потом запишем в верстку и зделаем ее динаминой
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  // функция для превращения статичной верстки в динамическую
  // id - id блока с таймером
  // endtime - сюда будет приходить дедлайн
  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      // переменная для запуска интервала обновления таймера
      timeInterval = setInterval(updateClock, 1000);

    // создаем функцию обновления с дедлайном,
    // каждую секунду мы будем получать обновленные данные
    // о времени
    function updateClock() {
      let t = getTimeRemaining(endtime);
      // помещяем данные в верстку
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      // добавляем 0, если число меньше 10
      function addZero(num) {
        if (num <= 9) {
          return '0' + num;
        } else {
          return num;
        }
      }
      // добавляем в верстку 0 
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      // условие для остановки таймера и добавление нулей,
      // чтобы не было минуса
      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  // ф-ция для обновления часов каждую секунду
  // вызываем ф-цию с id и временем остановки таймера
  setClock('timer', deadline);
});