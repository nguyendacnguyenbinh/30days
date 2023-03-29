var input = document.querySelector('.input');
var addBtn = document.querySelector('.header button');
var todos = document.querySelector('.todos');
var form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault()
    let val = input.value.trim()

    if(val){        
        addTask({
            text: val,
        });
        
    }
    
    input.value = ''
})

// todo 
// {
//     text: text,
//     status: done
// }

// khoi tao 1 task moi voi object cho truoc
function addTask(todo){
    let li = document.createElement('li');

    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fa-solid fa-trash-can"></i>
    `;

    if(todo.status == 'done') {
        li.setAttribute('class', 'done');
    }

    li.addEventListener('click', function(){
        li.classList.toggle('done');
        saveTodoList();
    })

    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove();
        saveTodoList();
    })

    todos.appendChild(li);
    saveTodoList();
}

// luu tru du lieu vao vung nho

function saveTodoList(){
    let todoList = document.querySelectorAll('li');
    let todoStorage = [];

    todoList.forEach(function(todo){
        let text = todo.querySelector('span').innerText;
        let status = todo.getAttribute('class');

        todoStorage.push({text, status});
    })

    console.log(todoStorage)
    localStorage.setItem('todoList', JSON.stringify(todoStorage));

}

//  khoi tao voi vung nho ban dau
function init (){    
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function(todo){ 
        addTask(todo); 
    });
}

init ();