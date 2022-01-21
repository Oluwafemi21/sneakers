const cart = document.getElementById('cart');
const previewCard = document.getElementById('card');
const closeBtn = document.getElementById('close');
const menu = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');
const counter = document.getElementById('counter');
const iconPlus = document.getElementById('icon-plus');
const iconMinus = document.getElementById('icon-minus');
const addCart = document.getElementById('add-to-cart');
const cartNumber = document.getElementById('cart-number');
const numOfItems = document.getElementById('number-of-items');
const checkout = document.getElementById('checkout');
const amount = document.getElementById('amount');
const emptyCart = document.getElementById('empty-cart');
const cartInfo = document.getElementById('cart-info');
const removeItem = document.getElementById('icon-delete');
const backdrop = document.getElementById('lightbox');
const hideBackdrop = document.getElementById('close-lightbox');


cart.addEventListener('click',()=>{
    previewCard.classList.toggle('hidden');
});

menu.addEventListener('click',()=>{
    navMenu.classList.remove('hidden')
    closeBtn.classList.remove('hidden');
    backdrop.classList.remove('hidden');
});

closeBtn.addEventListener('click',()=>{
    navMenu.classList.add('hidden');
    closeBtn.classList.add('hidden');
    backdrop.classList.add('hidden');
});

iconPlus.addEventListener('click',()=>{
    counter.textContent = Number(counter.textContent) + 1;
});

iconMinus.addEventListener('click',()=>{
    counter.textContent = Number(counter.textContent) - 1;
    if(counter.textContent < 0){
        counter.textContent = 0;
    }
});

addCart.addEventListener('click', ()=>{
    // Show number of items ordered in cart if order is greater than one else hide the number of items
    if(counter.textContent > 0 ){
        cartNumber.classList.remove('hidden');
        cartNumber.textContent = counter.textContent;
        emptyCart.classList.add('hidden');
        cartInfo.classList.remove('hidden');
    } else{
        cartNumber.classList.add('hidden');
        cartInfo.classList.add('hidden')
        emptyCart.classList.remove('hidden');
    }

    // Update the number of items in cart modal
    numOfItems.textContent = counter.textContent;
    
    // Calculate the total amount to be paid
    let totalAmount = Number(amount.textContent) * numOfItems.textContent;
    checkout.textContent = `$${totalAmount.toFixed(2)}`
});

removeItem.addEventListener('click',()=>{
    counter.textContent = 0;
    cartNumber.classList.add('hidden');
    cartInfo.classList.add('hidden');
    emptyCart.classList.remove('hidden');
})


// Lightbox

hideBackdrop.addEventListener('click',()=>{
    backdrop.classList.add('hidden');
})