var counters = document.querySelectorAll('.counter');

counters.forEach(function (counter) {
    let numberEl = counter.querySelector('.number');
    let to = parseInt(numberEl.innerText);
    let count = 0;
    let time = 150;
    let step = Math.round(to / time)

    let counting = setInterval(function () {
        if(count >= to) {
            clearInterval(counting);
            numberEl.innerText = to;
        }else{
            count+= step;
            numberEl.innerText = count;
        }
    }, 1)
})