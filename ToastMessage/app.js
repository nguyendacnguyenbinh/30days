var success = document.querySelector('.success');
var warning = document.querySelector('.warning');
var error = document.querySelector('.error');

var showBtn = document.querySelectorAll('.control button')

showBtn.forEach((btn) => {
    btn.addEventListener('click',function(event){
        createToast(event.target.className);
    })
})

const toasts = {
    success: {  
        icon: `<i class="fa-solid fa-circle-check"></i>`,
        msg: `<p>This is a success message</p>`
    },
    warning: {  
        icon: `<i class="fa-solid fa-circle-exclamation"></i>`,
        msg: `<p>This is a warning message</p>`
    },
    error: {  
        icon: `<i class="fa-solid fa-circle-xmark"></i>`,
        msg: ` <p>This is a error message</p>`
    },
}

function createToast(status){
    let toast = document.createElement('div');

    toast.className = status;
    toast.innerHTML = 
        `${toasts[status].icon}
        ${toasts[status].msg}
        <span class="countdown"></span>
        `
    document.querySelector('.message').appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'hideslide 1s ease forwards'
    }, 4000)
    
    setTimeout(() =>{
        toast.remove()
    },5000)
}
