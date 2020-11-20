
const formBtn = document.querySelector('#close-form')
const form = document.querySelector('.form')

function toggler() {
    form.classList.toggle('hide')
    if(formBtn.innerText === 'X') {
        formBtn.innerText = '+'
    } else {
        formBtn.innerText = 'X'
    }
}
formBtn.addEventListener('click', toggler)

/* Form validation */
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')

const emailList = []

function validateForm() {
    if(nameInput.value == false || emailInput.value == false) {
        nameInput.style.border = '2px solid red'; 
        emailInput.style.border = '2px solid red'; 
        alert('you must enter a name and an email address to subscribe!')
    } else if(nameInput == false) {
        nameInput.style.border = '2px solid red';
        alert('please enter a name to subscribe')
    } else if(emailInput == false) {
        emailInput.style.border = '2px solid red';
        alert('please enter an email address to subscribe')
    } else {
        emailList.push('{nameInput.value, emailInput.value}')
        displayThankYou()
    }
}
form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
})

const formContainer = document.querySelector('.form-container')
function displayThankYou() {
    formContainer.innerText = 'Thank you for subscribing!';
    setTimeout(function(){formContainer.remove}, 3000)
};
nameInput.addEventListener('change', function() {nameInput.style.border = 'none'})
emailInput.addEventListener('change', function() {emailInput.style.border = 'none'})

