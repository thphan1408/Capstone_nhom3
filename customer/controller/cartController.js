function renderReloadCart(arrProduct) {
  let html = "";
  for (let i = 0; i < arrProduct.length; i++) {
    let prod = arrProduct[i];
    html += `
   <li>
		   <img src="${prod.img}" class="cart-thumb img-fluid" alt="" />
		   <strong>${prod.name} </strong>
		   <span>
			   <div class="amount-qty">
				   <button class="btn-qty" onclick="decreaseQty('${prod.id}')">-</button>
				   <input class="input-qty" value="1">
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
  getElem(".listCard").innerHTML = html;
  isCheckInput();
}

function deleteProduct(id) {
  cart.deleteProduct(id);
  renderReloadCart(cart.productsCart);
}

// tăng số lượng sản phẩm theo id
function increaseQty(id) {
  let qty = getElem(".input-qty").value;

  for (let i = 0; i < cart.productsCart.length; i++) {
    if (cart.productsCart[i].id === id) {
      cart.productsCart[i].qty = qty;
      qty++;
      break;
    }
  }
  getElem(".input-qty").value = qty;
}

// giảm số lượng sản phẩm theo id
function decreaseQty(id) {
  let qty = getElem(".input-qty").value;

  for (let i = 0; i < cart.productsCart.length; i++) {
    if (cart.productsCart[i].id === id) {
      if (qty > 1) {
        qty--;
        cart.productsCart[i].qty = qty;
        break;
      }
    }
  }

  getElem(".input-qty").value = qty;
}

// Kiểm tra chuỗi nhập vào input
const isCheckInput = () => {
  getElem(".input-qty").addEventListener("input", function () {
    let qty = getElem(".input-qty").value;
    qty = parseInt(qty);
    qty = qty == 0 || isNaN(qty) ? 1 : qty;
    getElem(".input-qty").value = qty;
  });
};
