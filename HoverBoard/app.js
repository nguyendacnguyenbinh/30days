var container = document.querySelector('.container');

for (var i = 0; i <200; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'square');

    div.addEventListener('mouseenter', function(e){
        let color = makeColor()
        e.currentTarget.style.background = color
        e.currentTarget.style.boxShadow = `0 0 10px ${color},0 0 100px ${color}`
        
    })


    div.addEventListener('mouseleave', function(e){
        e.currentTarget.style.background = '#1d1d1d'
        e.currentTarget.style.boxShadow = `0 0 10px rgba(0, 0, 0, 0.5)`

    });
    container.appendChild(div);
    
}



function makeColor(){
    let charColor = '0123456789ABCDEF'
    let color ='#'

    for (let i = 0; i <6; i++) {
        color += charColor[Math.floor(Math.random() * charColor.length)]
    }
    return color
}