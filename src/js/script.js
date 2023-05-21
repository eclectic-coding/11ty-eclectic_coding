import { inject } from '@vercel/analytics';

inject();


const navMenuBtn = document.getElementById('mobile-menu-btn');
const navMenuContainer = document.getElementById('mobile-menu');

const navToggleFunc = function () {
  navMenuContainer.classList.toggle('active');
}

// Toggle menu
navMenuBtn.addEventListener('click', navToggleFunc);
navMenuContainer.addEventListener('click', navToggleFunc);
