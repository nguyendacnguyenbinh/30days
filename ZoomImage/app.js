var result = document.querySelector('.result')
var images = document.querySelectorAll('img')
var wrapImg = document.querySelectorAll('.zoomer .image')
var zoom = document.querySelector('.zoomer')
let size = 4;

wrapImg.forEach(function(image){
    image.addEventListener('mousemove', function(e) {
        result.classList.remove('hide')     
        let w = this.offsetWidth
        let h = this.offsetHeight

        let posX = (e.offsetX /w) * 100
        let posY = (e.offsetY /h) * 100

        let imageUrl = e.target.src

        result.style.left = e.clientX + "px"
        result.style.top = e.clientY + "px"
        result.style.backgroundImage = `url("${imageUrl}")`;
        result.style.backgroundPosition = `${posX}% ${posY}%`
        result.style.backgroundSize = `${size*w}px ${size*h}px`

    })

    image.addEventListener('mouseleave', function(e) {
        result.style = ''
        result.classList.add('hide')     
        console.log('leave')
    })
})

