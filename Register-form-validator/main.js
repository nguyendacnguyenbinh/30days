var userName = document.getElementById('user-name')
var email = document.getElementById('email')
var password = document.getElementById('password')
var password2 = document.getElementById('password2')

var loginBtn = document.querySelector('.login-btn')

var form = document.querySelector('form')

function showError(input, message) {
    input.value = input.value.trim()

    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    input.value = input.value.trim()

    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error');
    small.innerText = "";
}

function checkEmptyError(listArray){
    let isEmpty = false

    listArray.forEach(element => {
        element.value = element.value.trim()
        if(!element.value){
            isEmpty = true
            showError(element, 'Khong duoc de trong')
            
        } else{
            showSuccess(element)
            isEmpty = false           
        }
    });    

    return isEmpty
}

function checkEmptyEmail(email){
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let isEmailError = false;

    if(regexEmail.test(email.value)){
        showSuccess(email);
    } else {
        showError(email, 'Invalid');
        isEmailError = true;
    }

    return isEmailError;
}

function checkLengthError(input,min,max) {
    input.value = input.value.trim()
    
    if(input.value.length < min){
        showError(input, `It nhat ${min} ky tu`)        
    }
    if(input.value.length > max){
        showError(input, `Nhieu nhat ${max} ky tu`)
    }
}

function checkMatchPasswordError(password,password2){
    let isMatch = true;
    if(password.value !== password2.value){
        showError(password2, 'Mat khau khong trung khop')
        isMatch = false
    } 
    return isMatch
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError([userName, email, password, password2])
    let isEmailError = checkEmptyEmail(email)
    let checkLengthUserName = checkLengthError(userName, 8 ,25)
    let checkLengthPassword = checkLengthError(password, 8 ,25)

    
    let checkMatchPassword = checkMatchPasswordError(password, password2)


})
