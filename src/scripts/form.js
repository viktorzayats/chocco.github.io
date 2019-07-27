const myForm = document.querySelector('.form');
var modal = document.querySelector('.modal');
var inner = modal.parentNode;
var closeModal = modal.querySelector('#btn');


myForm.addEventListener('submit', function (e) {
   e.preventDefault();

   var formData = new FormData(myForm);
   var url = 'https://webdev-api.loftschool.com/sendmail';

   formData.append('to', 'zaychik@mail.ru');
   fetch(url, {method: 'POST', body: formData})
      .then(function (response){
         return response.json();
      })

      .then(function (formData){
         if(formData.status || formData.status == 0) {
            const wrapper = document.querySelector('.wrapper');
            var send = modal.querySelector('.modal__send');
            send.textContent = formData.message;
            inner.classList.add('inner_show');
            myForm.reset();
           // wrapper.style.height = 100 + '%';
         }
      })
});

closeModal.addEventListener('click', function(e) {
   e.preventDefault();
   const wrapper = document.querySelector('.wrapper');
   inner.classList.remove('inner_show');
});