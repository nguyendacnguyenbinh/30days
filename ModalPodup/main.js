var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

var openButton = document.querySelector('.open__button');

function toggleHide(){
    modal.classList.toggle('hide');
}

iconClose.addEventListener('click', toggleHide);
btnClose.addEventListener('click', toggleHide);
openButton.addEventListener('click', toggleHide);


modal.addEventListener('click', function(e){
    if (e.target == e.currentTarget) toggleHide();
});