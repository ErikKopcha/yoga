window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // form
  let message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с Вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
    input = document.querySelectorAll('input'),
    statusMessage = document.createElement('div'),
    overlaySuccess = document.querySelector('.overlay__success'),
    contactForm = document.querySelector('#form');

  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);

      let formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

          request.send(formData);
          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            }
            if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                resolve();
              } else {
                reject();
              }
            }
          };
        });
      }

      function clearInput() {
        input.forEach((el) => {
          el.value = '';
        });
      }

      postData(formData)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => {
          statusMessage.innerHTML = message.success;
          overlaySuccess.style.display = 'block';
        })
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput);
    });
  }

  sendForm(form);
  sendForm(contactForm);
});