const nav = document.querySelector('.nav');
const close = document.querySelector('.nav__close');
const gamburger = document.querySelector('.gamburger');

gamburger.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.add('nav_active');
});

close.addEventListener('click', function (e) {
   e.preventDefault();
   nav.classList.remove('nav_active'); 
});