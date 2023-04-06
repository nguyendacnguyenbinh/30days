var dragable = document.querySelectorAll('.dragable');
var boxes = document.querySelectorAll('.box');

var currentTarget = null

dragable.forEach(function(element) {
    element.addEventListener('dragstart', dragstart);
    element.addEventListener('dragend', dragend);

})


boxes.forEach(function(box) {
    box.addEventListener('dragover', dragover);
    box.addEventListener('drop', dragdrop);
})

function dragstart(){
    this.classList.add('dragging');
    currentTarget = this
}
function dragend(){
    this.classList.remove('dragging')
}

function dragover(e){
    e.preventDefault();
    this.appendChild(currentTarget)
}

function dragdrop(e){
    console.log(this.querySelector('.dragable'), e)
    if(!this.querySelector('.dragable')){
        this.appendChild(currentTarget)
    }

}