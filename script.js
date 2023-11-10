// Elements
const nav = document.querySelector('.nav');
const navLinks = Array.from(document.querySelectorAll('.nav__item'));
const navList = document.querySelector('.nav__list');
const navHamburger = document.querySelector('.nav__hamburger');
const openHamburger = document.querySelector('#hamburgerOpen');
const closeHamburger = document.querySelector('#hamburgerClose');

// Control Nav closing
navList.addEventListener('click', (e) => {
  const cursorTarget = e.target.closest('.nav__item');
  if (!navLinks.includes(cursorTarget)) return;
  closeHamburger.checked = true;
});
