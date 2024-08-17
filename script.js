'use strict';

const inputEmail = document.querySelector('.--1');
const inputPassword = document.querySelector('.--2');
const input3 = document.querySelector('.--3');
const btnLogin = document.querySelector('.form__data--btn');
const btnSubmit = document.querySelector('.submit');
const btnForget = document.querySelector('.form__data--forget');
const container = document.querySelector('.contain');
const round = document.querySelector('.round');
const body = document.querySelector('body');
const mode = document.querySelector('.mode');

const account = {
  email: 'ksarosh785@gmail.com',
  password: '123',
};

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  if (
    account.email === inputEmail.value &&
    account.password === inputPassword.value
  ) {
    alert('correct');
  } else {
    alert('wrong');
  }
});

round.addEventListener('click', () => {
  body.classList.add('toggle');
  mode.textContent = 'Light mode';
  mode.style.color = 'white';

  round.addEventListener('click', function () {
    if (body.classList.contains('toggle')) {
      body.classList.remove('toggle');
      mode.textContent = 'Dark mode';
      mode.style.color = 'black';
    }
  });
});
