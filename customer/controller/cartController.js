function renderReloadCart(id) {
  let prod = Cart.productsCart.find((pro) => pro.id === id);
  getElem(".listCard").innerHTML += `
		  <li>
				  <img src="${prod.img}" class="cart-thumb img-fluid" alt="" />
				  <strong>${prod.name} </strong>
				  <span>
					  <div>
						  <button class="btn-qty" onclick="decreaseQty('${prod.id}')">-</button>
						  <p class="input-qty">1</p>
						  <button class="btn-qty" onclick="increaseQty('${prod.id}')">+</button>
					  </div>
				  </span>
				  <p>$${prod.price}</p>
  
				  <button class="btn btn-danger" onclick="deleteProduct('${prod.id}')">
					  <i class="fa fa-trash"></i>
				  </button>
		  </li>
	`;
}

// thêm sản phẩm vào giỏ hàng
function addToCart(id) {
  renderReloadCart(id);
}

