let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let openShoppingMoblie = document.querySelector('.shopping-m');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let checkout = document.querySelector('.checkOutBtn');

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener('click', ()=>{
  body.classList.remove('active');
})

openShoppingMoblie.addEventListener("click", () => {
  body.classList.add("active");
});
