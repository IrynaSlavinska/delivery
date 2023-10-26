const burger = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.header-menu');

burger.addEventListener('click', toggleMenu);

function toggleMenu() {
  burger.classList.toggle('burger-active');
  burgerMenu.classList.toggle('burger-active');
  burgerMenu.classList.contains('burger-active')
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
}
