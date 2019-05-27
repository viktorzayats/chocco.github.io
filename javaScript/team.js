const itemTeam = document.querySelectorAll('.accordeon-team__item');
const linkTeam = document.querySelectorAll('.accordeon-team__name');

for (let i = 0; i < linkTeam.length; i++) {
    linkTeam[i].addEventListener('click', function (e) {
       e.preventDefault(); 
    });
};

for (let i = 0; i < itemTeam.length; i++) {
    itemTeam[i].addEventListener('click', function () {
        for (let j = 0; j < itemTeam.length; j++) {
            if (itemTeam[j] !== this) {
                itemTeam[j].classList.remove('accordeon-team__item_active');
            } else {
                itemTeam[j].classList.toggle('accordeon-team__item_active');
            }
        }
    });
};