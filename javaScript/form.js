const myForm = document.querySelector('.form');
const button = document.querySelector('#button');

button.addEventListener('click', function (e) {
   e.preventDefault();
   
   if (validateForm(myForm)) {
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            street: myForm.elements.street.value,
            house: myForm.elements.house.value,
            housing: myForm.elements.housing.value,
            room: myForm.elements.room.value,
            floor: myForm.elements.floor.value,
            field: myForm.elements.field.value,
            question: myForm.elements.question.value,
            nocall: myForm.elements.nocall.value
        };
        

       const xhr = new XMLHttpRequest();
       xhr.responseType = 'json';
       xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/fail');
       xhr.send(JSON.stringify(data));
       xhr.addEventListener('load', () => {
        console.log(xhr.response);
       });
   };
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.street)) {
        valid = false;
    }
    if (!validateField(form.elements.house)) {
        valid = false;
    }

    return valid;
};

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
};