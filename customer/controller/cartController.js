// Lấy dữ liệu từ local storage lúc user load trang
const dataJSON = localStorage.getItem("cart");
// console.log(dataJSON);
if (dataJSON) {
  // Cách 2:
  cart.productsCart = JSON.parse(dataJSON).map((prod) => {
    return {
      ...prod,
      total: prod.price * prod.qty,
    };
  });
  // console.log(cart.productsCart);

  // Cách 1:
  // for (let i = 0; i < cart.productsCart.length; i++) {
  //   // const prod = cart.productsCart[i];
  //   cart.productsCart[i] = {
  //     ...cart.productsCart[i],
  //     total: cart.productsCart[i].price * cart.productsCart[i].qty,
  //   };
  //   // cart.productsCart[i] = prod;

  //   // console.log(cart.productsCart[i]);
  // }
  renderReloadCart(cart.productsCart);
  ValueQty(cart.productsCart.length);
}

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

  // Tính tổng tiền
  let total = totalMoney();
  document.getElementById("priceTotal").innerHTML = "$" + Math.floor(total);

  // Kiểm tra chuỗi nhập vào input
  getElem(".input-qty").addEventListener("input", function () {
    let qty = getElem(".input-qty").value;
    qty = parseInt(qty);
    qty = qty == 0 || isNaN(qty) ? 1 : qty;
    getElem(".input-qty").value = qty;
  });
}

function deleteProduct(id) {
  // Lấy dữ liệu từ local storage
  const dataJSON = localStorage.getItem("cart");
  // Chuyển đổi dữ liệu từ chuỗi JSON sang mảng
  const data = JSON.parse(dataJSON);

  // Duyệt lấy từng phần tử để so sánh id
  for (let i = 0; i < data.length; i++) {
    const prod = data[i];
    if (prod.id === id) {
      // Xóa phần tử trong mảng
      data.splice(i, 1);
      break;
    }
  }

  // Lưu lại dữ liệu vào local storage
  localStorage.setItem("cart", JSON.stringify(data));

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
  totalProduct(id);
  renderReloadCart(cart.productsCart);
}


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
  // console.log(productsCart);

  localStorage.removeItem("cart");

  renderReloadCart(productsCart);
  totalMoney();
  lengthCart();
}
