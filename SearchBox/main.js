var button = document.querySelector('.search__button')

button.addEventListener('click', function(e) { 
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus();
})