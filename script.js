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

let working = false;

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
  if (!working) {
    document.documentElement.style.setProperty('--primary-color', 'black');
    document.documentElement.style.setProperty(
      '--linear-gradient-1',
      '#000000a6'
    );
    document.documentElement.style.setProperty(
      '--linear-gradient-2',
      '#00000096'
    );
    mode.textContent = 'Light mode';
    mode.style.color = 'White';
    working = true;
  }

  round.addEventListener('click', () => {
    if (working) {
      document.documentElement.style.setProperty('--primary-color', '#86ab89');
      document.documentElement.style.setProperty(
        '--linear-gradient-1',
        '#86ab89a4'
      );
      document.documentElement.style.setProperty(
        '--linear-gradient-2',
        '#86ab89a9'
      );
      mode.textContent = 'Dark mode';
      mode.style.color = 'black';
      working = true;
    }
  });
});
