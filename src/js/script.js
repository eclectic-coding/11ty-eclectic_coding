const navMenuBtn = document.getElementById('mobile-menu-btn');
const navMenuContainer = document.getElementById('mobile-menu');

console.log(navMenuBtn);
const navToggleFunc = function () {
  navMenuContainer.classList.toggle('active');
}

// Toggle menu
navMenuBtn.addEventListener('click', navToggleFunc);
navMenuContainer.addEventListener('click', navToggleFunc);
