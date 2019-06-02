const left = document.querySelector('.slide__arrow-left');
const right = document.querySelector('.slide__arrow-right');
const slide = document.querySelector('.slide__list');
const slidStyle = getComputedStyle(slide);
var slideWidth = slide.clientWidth;
var pars = 0;
var comput = slide.children.length * slideWidth - slideWidth;


right.addEventListener('click', function (e) {
   e.preventDefault();

   if (pars < comput) {
       pars += slideWidth;
       slide.style.transform = `translateX(${-pars}px)`;
   }else {
        pars = 0;
        slide.style.transform = `translateX(${0}px)`;
   };
});

left.addEventListener('click', function (e) {
    e.preventDefault();
 
    if (pars > 0) {
        pars -= slideWidth;
        slide.style.transform = `translateX(${-pars}px)`;
    } else {
        pars = comput;
        slide.style.transform = `translateX(${-pars}px)`;
    };
 });