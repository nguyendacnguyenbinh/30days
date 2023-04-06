var body = document.querySelector('body')
var input = document.querySelector('input')
var switchBtn = document.querySelector('.switch-btn')

function init(){
    let mode = localStorage.getItem('mode')
    body.setAttribute('class', mode)
}

input.addEventListener('change', function(e){
    body.classList.toggle('dark')
    // luu mode vao local storage
    let mode = body.getAttribute('class') ? "dark" : ""
    localStorage.setItem('mode', mode)
})