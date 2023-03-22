var gallery = document.querySelector('.gallery');
var img = document.querySelectorAll('.img img');
var btnClose = document.querySelector('.btnClose');

var galleryImg = document.querySelector('.gallery__inner img');

var btnPrev = document.querySelector('.prev');
var btnNext = document.querySelector('.next');

var currentIndex = 0;

function showGallery() {
    if(currentIndex == 0){
        btnPrev.classList.add('hide');
    } else{
        btnPrev.classList.remove('hide');
    }

    if(currentIndex == img.length - 1){
        btnNext.classList.add('hide');
    } else{
        btnNext.classList.remove('hide');
    }

    // display gallery
    galleryImg.src = img[currentIndex].src;
    gallery.classList.add('show');
}

img.forEach((item, index) => {
    item.addEventListener('click', function(){
        currentIndex = index;
        showGallery()

    })
})

btnClose.addEventListener('click', function(){
    gallery.classList.remove('show');
});

document.addEventListener('keydown', function(e){
    if (e.keyCode == 27)
    gallery.classList.remove('show');
})

btnPrev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--;
        showGallery();
        console.log(currentIndex)
    }
})

btnNext.addEventListener('click', function(){
    if(currentIndex < img.length - 1){
        currentIndex++;
        showGallery();
        console.log(currentIndex)

    }
})
