var btnalert = document.querySelector('.alert');
var box = document.querySelector('.box');

var result = document.querySelector('.result p');

var key = document.querySelector('.name  p:last-child');
var numberLocation = document.querySelector('.location p:last-child');
var which = document.querySelector('.which  p:last-child');
var code = document.querySelector('.code  p:last-child');

document.addEventListener('keydown', function(e){
    btnalert.classList.add('hide');
    box.classList.remove('hide');
   
    let keyName = (e.keyCode === 32) ? 'Space' : e.key;

    result.innerHTML = e.which;
    
    key.innerHTML = keyName;
    numberLocation.innerHTML = e.location;
    which.innerHTML = e.which;
    code.innerHTML = e.code;

    // key.innerText = keyName;
    // numberLocation.innerText = e.location;
    // which.innerText = e.which;
    // code.innerText = e.code;
    
})
 