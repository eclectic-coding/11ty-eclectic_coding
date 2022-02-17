const mobile = document.querySelector('.mobile-nav__menu');
const navMenuBtn = document.getElementById('mobile-menu');
const navMenuContainer = document.getElementById('mobile-nav-container');

const navToggleFunc = function () {
  mobile.classList.toggle('active');
  navMenuContainer.style.display = 'none';
};

// Toggle menu
navMenuBtn.addEventListener('click', navToggleFunc);

// Close menu by clicking canvas
mobile.addEventListener('click', function () {
    mobile.classList.remove('active');
    navMenuContainer.style.display = 'flex';
  }
);

// Close menu with menu close button

