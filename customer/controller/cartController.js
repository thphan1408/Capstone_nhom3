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
				   <input class="input-qty" value="${prod.qty}">
				   <button class="btn-qty" onclick="increaseQty('${prod.id}')">+</button>
			   </div>
		   </span>
		   <p>$${prod.total}</p>

		   <button class="btn btn-danger" onclick="deleteProduct('${prod.id}')">
			   <i class="fa fa-trash"></i>
		   </button>
   </li>
`;
  }
  getElem(".listCard").innerHTML = html;
    // isCheckInput(id);
  let total = totalMoney();
  document.getElementById("priceTotal").innerHTML = '$' + Math.floor(total);
}

function deleteProduct(id) {
  cart.deleteProduct(id);
  renderReloadCart(cart.productsCart);
  lengthCart();
}

// tăng số lượng sản phẩm theo id
function increaseQty(id) {
  for (let i = 0; i < cart.productsCart.length; i++) {
    const prod = cart.productsCart[i];
    if (prod.id === id) {
      prod.qty += 1;
      break;
    }
  }
  // totalMoney(cart.productsCart);
  totalProduct(id);
  renderReloadCart(cart.productsCart);
}

// giảm số lượng sản phẩm theo id
function decreaseQty(id) {
  for (let i = 0; i < cart.productsCart.length; i++) {
    const prod = cart.productsCart[i];
    if (prod.id === id && prod.qty > 1) {
      prod.qty -= 1;
      break;
    }
  }
  // totalMoney(cart.productsCart);
  totalProduct(id);
  renderReloadCart(cart.productsCart);
}

// Kiểm tra chuỗi nhập vào input
// const isCheckInput = () => {
//   // getElem(".input-qty").addEventListener("input", function () {
//   //   let qty = getElem(".input-qty").value;
//   //   qty = parseInt(qty);
//   //   qty = qty == 0 || isNaN(qty) ? 1 : qty;
//   //   getElem(".input-qty").value = qty;
//   // });
// };

// Tính tổng tiền các sản phẩm trong giỏ hàng
function totalMoney() {
  let total = 0;
  for (let i = 0; i < cart.productsCart.length; i++) {
    const prod = cart.productsCart[i];
    total += prod.price * prod.qty;
  }
  return total;
}

// Tính tổng từng sản phẩm
function totalProduct(id) {
  for (let i = 0; i < cart.productsCart.length; i++) {
    const prod = cart.productsCart[i];
    if (prod.id === id) {
      prod.total = prod.price * prod.qty;
      // console.log("Tổng của sản phẩm: ", prod);
      break;
    }
  }
  renderReloadCart(cart.productsCart);
}

function lengthCart() {
  return (
    (getElem(".quantity-cart").innerHTML = cart.productsCart.length),
    (getElem(".quantity").innerHTML = cart.productsCart.length)
  );
}

function checkOut() {
    productsCart = [];
    cart.productsCart.length = 0;
    console.log(productsCart);
    renderReloadCart(productsCart);
    totalMoney();
    lengthCart();
}
