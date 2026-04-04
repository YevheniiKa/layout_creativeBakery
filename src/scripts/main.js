'use strict';

const burgerBtn = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const btn = document.querySelector('.header__burger-menu');

burgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('mobile-menu--open');

  burgerBtn.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});

btn.addEventListener('click', () => {
  btn.classList.toggle('header__burger-menu--open');
});
