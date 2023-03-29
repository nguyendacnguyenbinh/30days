var inputImg = document.querySelector('#input-img')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

inputImg.addEventListener('change', function(e){
    let img = document.createElement('img')

    let file = e.target.files[0]    

    if(!file.name.endsWith('.jpg')){
        error.innerText = 'File khong hop le'
        return
    }else{
        error.innerText = ''
    }

    if(file.size / (1024 * 1024) > 5){
        error.innerText = 'File qua lon'
        return
    } else{
        error.innerText = ''
    }

    img.src = URL.createObjectURL(file)

    preview.appendChild(img);
})
