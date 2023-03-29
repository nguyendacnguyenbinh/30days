var filter = document.querySelector('#filter');
var products = document.querySelector('.products');

var mockData = fetch('https://fakestoreapi.com/products').then(res => {
    return res.json()
}).then(data => {
    data.forEach(product => {
        var newProduct = document.createElement('div');
    
        newProduct.classList.add('product')
    
        newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <div class="product-detail">
                <h4>${product.title}</h4>
                <p>$${product.price}</p>
            </div>`
        
        products.appendChild(newProduct)
    })
    }

);
filter.addEventListener('input', function(e){
    let txtSearch = e.target.value.trim();
    let listProductDOM = document.querySelectorAll('.product');

    listProductDOM.forEach(item => {
        
        if(item.innerText.toLowerCase().includes(txtSearch)){
            item.classList.remove('hide');

        } else {
            item.classList.add('hide');
        }
        
    })
})

