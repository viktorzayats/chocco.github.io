const slide = document.querySelector('.slide');
const list = slide.querySelector('.slide__list');
const slideLenght = list.children.length;
let current = 0;

slide.addEventListener('click', function(event) {
    event.preventDefault();
    const target = event.target;
    
    if (target.classList.contains('slide__arrow-left')) {
        slidLeft();
    };

    if (target.classList.contains('slide__arrow-right')) {
        slideRight();
    };
});

function slidLeft () {      
    if (current > 0) {
        current--;
        translateX(current);
    } else {
        current = slideLenght - 1;
        translateX(current);
    };
};

function slideRight() {
    if (current < slideLenght - 1) {        
        current++;
        translateX(current);
    } else {
        current = 0;
        translateX(current);
    };
};

 function translateX (indexSlide) {
    list.style.transform = `translateX(${-indexSlide * 100}%)`;
};