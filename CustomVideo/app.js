var player = document.querySelector('.container')
var video = player.querySelector('video')
var playBtn = player.querySelector('.play')


function togglePlay() {
    if (video.paused){
        video.play()       
        playBtn.innerHTML = "<i class='bx bx-pause' ></i>"
    } else {
        video.pause();        
        console.log(video.currentTime)
        playBtn.innerHTML = "<i class='bx bx-play' ></i>"
        
    }
}



playBtn.addEventListener('click',togglePlay)

video.addEventListener('click',togglePlay)

console.log(video)
console.log(video.currentTime)
console.log(video.duration)
