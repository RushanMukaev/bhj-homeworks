const products = document.querySelector('.products');
const product = [...document.querySelectorAll('.product')];
const cartProducts = document.querySelector('.cart__products');



function productQuantControl(el) {
    const quantDec = el.querySelector('.product__quantity-control_dec')
    const quantInc = el.querySelector('.product__quantity-control_inc')
    const quantValue = el.querySelector('.product__quantity-value')
    
    quantDec.addEventListener('click', () => {
        if(quantValue.innerText <= 1) {
            return;
        } 
        quantValue.innerText -=  1;
    })

    quantInc.addEventListener('click', () => {
        quantValue.innerText ++;
    })
}

function add(el) {
    const productAdd = el.querySelector('.product__add');

    productAdd.addEventListener('click', () => {
        const quantValue = el.querySelector('.product__quantity-value')
        const productImage = el.querySelector('.product__image')
        const id = el.dataset.id;
        const cartProduct = [...document.querySelectorAll('.cart__product')]
        
        console.log(id)
        if(cartProduct.find((i) => i.dataset.id == id)) {

            const prodId = cartProducts.querySelector(`[data-id="${id}"]`)
            const countId = prodId.querySelector('.cart__product-count')
            countId.textContent = Number(quantValue.textContent) + Number(countId.textContent)

        } else {
            cartProducts.innerHTML +=
                `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${productImage.src}">
                <div class="cart__product-count">${quantValue.innerText}</div>
                </div>` 
        }
        quantValue.innerText = 1;
    })
}

product.forEach(productQuantControl);
product.forEach(add);

