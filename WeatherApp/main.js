var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');

var temp = document.querySelector('.temp');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility p');
var visibility = document.querySelector('.visibility p');
var visibility = document.querySelector('.visibility p');
var wind = document.querySelector('.wind p');
var sun = document.querySelector('.sun p');
var body = document.querySelector('body');

function changeWeatherUI(e){
    city.innerText = e.name
    country.innerText = e.sys.country
    time.innerText = new Date().toLocaleString()

    temp.innerHTML = `<span>${e.main.temp} <sup>o</sup>C</span>`
    shortDesc.innerText = e.weather[0].main
    visibility.innerText = e.visibility
    wind.innerText = e.wind.speed
    sun.innerText = e.clouds.all

    if(e.main.temp < 20 ) {
        body.setAttribute('class', 'cold')
    } else {
        body.setAttribute('class', 'hot')
    }

}

search.addEventListener('keyup', function(e){
    if(e.keyCode === 13 ) {        
        getWeather(e.target.value.trim());
    }
})

async function getWeather(input){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
	const res = await fetch(apiUrl)
	const weather = await res.json()
    changeWeatherUI(weather);
}

getWeather('ha noi');