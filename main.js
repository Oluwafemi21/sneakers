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


cart.addEventListener('click',()=>{
    previewCard.classList.toggle('hidden');
});

menu.addEventListener('click',()=>{
    navMenu.classList.remove('hidden')
    closeBtn.classList.remove('hidden');
    
});

closeBtn.addEventListener('click',()=>{
    navMenu.classList.add('hidden');
    closeBtn.classList.add('hidden');
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
    console.log(counter.textContent)
    if(counter.textContent > 0 ){
        cartNumber.classList.remove('hidden');
        cartNumber.textContent = counter.textContent;
    } else{
        cartNumber.classList.add('hidden');
    }
});