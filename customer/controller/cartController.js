function renderReloadCart(arrProduct) {
	let html = "";
	for (let i = 0; i < arrProduct.length; i++) {
		let prod =arrProduct[i];
		html += `
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
`
	}
	getElem(".listCard").innerHTML = html;
}

function deleteProduct(id) {
	Cart.deleteProduct(id);
	renderReloadCart(Cart.productsCart);
}