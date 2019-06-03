const myForm = document.querySelector('.form');



myForm.addEventListener('submit', function (e) {
   e.preventDefault();

   const formData = new FormData(myForm);
   formData.append('to', 'zaychik@mail.ru');
   var url = 'https://webdev-api.loftschool.com/sendmail';
   fetch(url, {method: 'POST', body: formData})
      .then(function(response){
         console.log(response);
      }) ;
   
   
    
   
});














// button.addEventListener('click', function (e) {
//    e.preventDefault();
   
//   if (validateForm(myForm)) {

//         const formData = new FormData(myForm);
//         // const formData = {
//         //     name: myForm.elements.name.value,
//         //     phone: myForm.elements.phone.value,
//         //     street: myForm.elements.street.value,
//         //     house: myForm.elements.house.value,
//         //     housing: myForm.elements.housing.value,
//         //     room: myForm.elements.room.value,
//         //     floor: myForm.elements.floor.value,
//         //     field: myForm.elements.field.value,
//         //     question: myForm.elements.question.value,
//         //     nocall: myForm.elements.nocall.checked
//         // };
//         formData.append('to', 'zaychik@mail.ru');
        
//        const xhr = new XMLHttpRequest();
//        xhr.responseType = 'json';
//        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
//        xhr.send(formData);
//        xhr.addEventListener('load', () => {
//         console.log(xhr.response);
//        });
//   };
// });

// function validateForm(form) {
//     let valid = true;

//     if (!validateField(form.elements.name)) {
//         valid = false;
//     }
//     if (!validateField(form.elements.phone)) {
//         valid = false;
//     }
//     if (!validateField(form.elements.street)) {
//         valid = false;
//     }
//     if (!validateField(form.elements.house)) {
//         valid = false;
//     }

//     return valid;
// };

// function validateField(field) {
//     field.nextElementSibling.textContent = field.validationMessage;
//     return field.checkValidity();
// };