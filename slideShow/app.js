var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var previewImg = document.querySelector('.preview-img');
var slideList = document.querySelectorAll('.slide img');


let currentIndex = 0;

updateSlide(currentIndex);

function updateSlide(index){
    currentIndex = index;

    previewImg.src = slideList[currentIndex].src;

    slideList.forEach(function(img){
        img.parentElement.classList.remove('active');
    })

    slideList[currentIndex].parentElement.classList.add('active');
}

slideList.forEach(function(img,index){
    img.addEventListener('click', function(){
        updateSlide(index);
    })
})

prev.addEventListener('click', function(){
        if(currentIndex == 0) currentIndex = slideList.length - 1;

        currentIndex--;
        updateSlide(currentIndex);
    }
)

next.addEventListener('click', function(){
    if (currentIndex == slideList.length - 1) currentIndex = 0
        currentIndex++;
        updateSlide(currentIndex);
    }
)

