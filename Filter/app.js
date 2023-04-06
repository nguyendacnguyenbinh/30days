// var buttonFood = document.querySelectorAll('.menu button')
// var foodList = document.querySelectorAll('.food-item')

// buttonFood.forEach(function(item) {
//     item.addEventListener('click', function(e) {

//         document.querySelector('.menu button.active').classList.remove('active');
//         e.target.classList.add('active')

//         const type = e.target.getAttribute('type-food');

//         foodList.forEach(function(food) {
//             if((food.getAttribute('type-food') == type) || type == 'all') {
//                 food.classList.remove('hide');
//             }              
//             else{
//                 food.classList.add('hide');
//             }
//         })


//     })
// })


// ===== cách 2 =====

var buttonFood = document.querySelectorAll('.menu button')
var foodList = document.querySelectorAll('.food-item')
var container = document.querySelector('.food-list')

let arr = []

foodList.forEach(function(item) {
    arr.push({
        src: item.querySelector('img').src,
        type: item.getAttribute('type-food')
    })  
})

buttonFood.forEach(function(food){
    food.addEventListener('click', function(e){
        document.querySelector('.menu button.active').classList.remove('active')
        e.currentTarget.classList.add('active')

        let type = food.getAttribute('type-food');
        if(type == 'all'){
            render(arr);
        } else {
            let listData = arr.filter(food => {
                return food.type == type
            })     
            render(listData);
        }
    })
})

function render(list) {
    container.innerHTML = ''
    list.forEach(function(item) {
        let food = document.createElement('div')
        food.setAttribute('type-food', item.type)
        food.classList.add('food-item')
        let img = document.createElement('img')
        img.src = item.src
        food.appendChild(img)
        container.appendChild(food)
    })
}

{
    /* <div class="food-item" type-food="meat">
        <img src="./meat1.jpg" alt="">
    </div> */}
