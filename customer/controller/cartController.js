function renderCart(id) {
  let prod = Cart.productsCart.find((pro) => pro.id === id);

  getElem(".listCard").innerHTML += `
		  <li>
				  <img src="${prod.img}" class="cart-thumb img-fluid" alt="" />
				  <strong>${prod.name} </strong>
				  <span>
					  <div class="amount-qty">
						  <button class="btn-qty" onclick="decreaseQty()">-</button>
						  <input type="text" id="input-qty" value="1"/>
						  <button class="btn-qty" onclick="increaseQty()">+</button>
					  </div>
				  </span>
				  <p class="txt-price">$${prod.price}</p>
  
				  <button class="btn btn-danger" onclick="deleteProduct('${prod.id}')">
					  <i class="fa fa-trash"></i>
				  </button>
		  </li>
	`;
  isCheckInput();
}

// thêm sản phẩm vào giỏ hàng
function addToCart(id) {
  renderCart(id);
}

// tăng số lượng sản phẩm
function increaseQty() {
  let qty = getElem("#input-qty").value;

  qty++;

  getElem("#input-qty").value = qty;
}

// giảm số lượng sản phẩm
function decreaseQty() {
  let qty = getElem("#input-qty").value;

  if (qty > 1) {
    qty--;
    getElem("#input-qty").value = qty;
  }
}

function isCheckInput() {
  getElem("#input-qty").addEventListener("input", () => {
    let qty = getElem("#input-qty").value;
    console.log(qty);
    qty = parseInt(qty);
    qty = isNaN(qty) || qty == 0 ? 1 : qty;
    getElem("#input-qty").value = qty;
    console.log(qty);
  });
}

