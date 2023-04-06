var colorEl = document.querySelector('.color');
var eraser = document.querySelector('.eraser');
var increase = document.querySelector('.increase');
var sizeEl = document.querySelector('.size');
var descrease = document.querySelector('.descrease');
var save = document.querySelector('.save');
var clear = document.querySelector('.clear');

var canvas = document.querySelector('canvas');

const context = canvas.getContext('2d')

let color = colorEl.value;
let isDrawing = false;
let size = parseInt(sizeEl.innerText)

let pos1 = {
    x: 0, 
    y: 0
}
let pos2 = {
    x: 0, 
    y: 0
}

colorEl.addEventListener('change', (e) =>{
    color = e.target.value;
})

eraser.addEventListener('click', (e) =>{
    color = '#fff';
})

increase.addEventListener('click', (e) =>{
    size += 5;
    if(size > 50) size = 50;
    sizeEl.innerText = size
})
descrease.addEventListener('click', (e) =>{
    size -= 5;
    if(size < 5) size = 5;
    sizeEl.innerText = size
})



canvas.addEventListener('mousedown', (e) =>{    
    isDrawing = true;   
    pos1.x = e.offsetX;
    pos1.y = e.offsetY;   

   
})



canvas.addEventListener('mousemove', function(e) {
    if(isDrawing){
        pos2.x = e.offsetX;
        pos2.y = e.offsetY;  
        context.beginPath();
        context.arc(pos1.x, pos1.y, size/2, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill()

        context.beginPath();
        context.moveTo(pos1.x, pos1.y);
        context.lineTo(pos2.x, pos2.y);
        context.strokeStyle = color;
        context.lineWidth = size;
        context.stroke();
        pos1.x = pos2.x
        pos1.y = pos2.y
    }
})

canvas.addEventListener('mouseup', (e) =>{       
    isDrawing = false;    
})
canvas.addEventListener('mouseleave', (e) =>{       
    isDrawing = false;    
})

save.addEventListener('click', (e) =>{
    var output = canvas.toDataURL('image/png');
    save.setAttribute('href', output)
})

clear.addEventListener('click', (e) =>{
    context.clearRect(0, 0, canvas.width, canvas.height)
})



























// let color = colorEl.value;

// let size = parseInt(sizeEl.innerText);

// let pos1 = {x: 0, y: 0}
// let pos2 = {x: 0, y: 0}
// let isPress = false

// canvas.addEventListener('mousedown', function(e) {
//      pos1 = {x: e.offsetX, y: e.offsetY}
//      isPress = true
// })

// canvas.addEventListener('mousemove', function(e) {
//     if(isPress) {
//         pos2 = {x: e.offsetX, y: e.offsetY};

//         context.beginPath();
//         context.arc(pos1.x, pos1.y, size/2, 0, 2 * Math.PI);
//         context.fillStyle = color;
//         context.fill();

//         context.beginPath();
//         context.moveTo(pos1.x, pos1.y);
//         context.lineTo(pos2.x, pos2.y);
//         context.strokeStyle = color;
//         context.lineWidth = size;
//         context.stroke();

//         pos1.x = pos2.x;
//         pos1.y = pos2.y;
//     }
// })

// canvas.addEventListener('mouseleave', function(e) {
//     isPress = false

// })

// canvas.addEventListener("mouseup", function(e) {
//     isPress = false

// })

// clear.addEventListener('click', function(e) {
//     var canvasStats = canvas.getClientRects()[0]

//     context.clearRect(0, 0, canvasStats.width, canvasStats.height)
// })

// save.addEventListener('click', function(){
//     var output = canvas.toDataURL('image/png');
//     save.setAttribute('href', output);
// })

// colorEl.addEventListener('change', function(e){
//     color = e.target.value;

// })


// increase.addEventListener('click', function(e){
//     size += 5;   
//     if(size > 50){ size = 50;}
//     sizeEl.innerText = size;
  
// })

// descrease.addEventListener('click', function(e){
//     size -= 5;   
//     if(size < 5){ size = 5;}
//     sizeEl.innerText = size;
  
// })

// eraser.addEventListener('click', function(e){
//     color = '#fff'
// });

