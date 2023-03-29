var body = document.querySelector('body')
var ranger = document.querySelector('.ranger')
var process = document.querySelector('.process')

function updateProcess(percent){
    process.style.width = `${percent}%`;

    process.querySelector('span').innerText = `${percent}%`;

    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`

}
updateProcess(40)


ranger.addEventListener('mousemove', function(e){

    let percent = e.offsetX / this.offsetWidth
    percent = Math.round(percent * 100)
    updateProcess(percent)
    
})