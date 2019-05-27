const item = document.querySelectorAll('.accordeon-menu__item');
const link = document.querySelectorAll('.accordeon-menu__link');
const closeMenu = document.querySelectorAll('.accordeon-menu__close');

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function(e) {
        e.preventDefault();
});
};


for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function () {
        for (let u = 0; u < item.length; u++) {
            if (item[u] !== this) {
                item[u].classList.remove('accordeon-menu__item_active');
            }else {
                this.classList.toggle('accordeon-menu__item_active');
            }
        }
    });
};

for (let i = 0; i < closeMenu.length; i++) {
    closeMenu[i].addEventListener('click', function (e) {
       e.preventDefault(); 
    });
};
