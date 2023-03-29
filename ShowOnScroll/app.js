var animationElement = document.querySelectorAll('.show-on-scroll');

function isInViewport(el){
    let rectEl = el.getClientRects()[0];
    let screenHeight = window.innerHeight

    if(!(rectEl.bottom < 0 || rectEl.top > screenHeight)){
        // ở trong màn hình
        el.classList.add('start')
    } else {
        // ở ngoài màn hình
        el.classList.remove('start')
    }
}

function loop(){
    animationElement.forEach(function(el){
        isInViewport(el);
    })
}

window.onscroll = loop