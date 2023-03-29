var ul = document.querySelector('.search__tag');
var iconClose = document.querySelectorAll('.search__tag i')
var input = document.querySelector('.search__input');
var removeAllBtn = document.querySelector('.btn-removeall');

let tags = ['nodejs', 'reactjs'];

console.log(tags.reverse())

createTag();

function createTag(){   
    ul.querySelectorAll('li').forEach((li) => {li.remove()})
    tags.slice().reverse().forEach((tag) => {
        let liTag = ` 
        <li>
            ${tag}
            <i class="fas fa-xmark" onclick="removeTag('${tag}')"></i>
        </li>                
        `
        ul.insertAdjacentHTML("afterbegin", liTag)
    }) 

    input.focus();
}

input.addEventListener('keyup', addTag)

function addTag(e){
    if (e.key == 'Enter'){

        let tag = e.target.value.trim();
        if(tag != '' && !tags.includes(tag)){
            tags.push(tag)
            createTag();
        }
        e.target.value = ''
    }

}

function removeTag( tag){
    let i = tags.indexOf(tag)
    tags.splice(i,1)
    createTag();
}

removeAllBtn.addEventListener('click', function(){
    tags.length = 0;
    createTag();
})
