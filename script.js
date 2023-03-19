'use strict';

const submit = document.querySelector('button[type="submit"]');
const pwd = document.querySelector('#pass');
const pwdConfirm = document.querySelector('#confirmpass');
const error = document.querySelector('span.error');

pwd.addEventListener('blur', function () {
  if (!pwdConfirm.value) {
    error.textContent = '';
    return;
  }

  if (pwdConfirm.value !== this.value) {
    error.textContent = 'password does not match';
  } else {
    error.textContent = '';
  }
});

pwdConfirm.addEventListener('blur', function () {
  if (pwd.value !== this.value) {
    error.textContent = 'password does not match';
  } else {
    error.textContent = '';
  }
});

submit.addEventListener('click', e => {
  if (pwd.value !== pwdConfirm.value) {
    e.preventDefault();
    error.textContent = 'password does not match';
  }
});