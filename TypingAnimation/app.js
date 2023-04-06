var p = document.querySelector('.text-typing p')
var text = 'Nodemy - Thực Chiến - Sáng Tạo'

let textArray = text.split('')

let currentIndex = 0;
setInterval(() => {
    if(currentIndex <= textArray.length )
        {
            p.innerHTML = text.substring(0, currentIndex)
            currentIndex++;
        }
    if(currentIndex > textArray.length){
        currentIndex = 0
    }
}, 100);

console.log(textArray)
