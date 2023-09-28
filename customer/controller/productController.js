let cart = new CartArr();
let productArr = [];

function getElem(selector) {
  return document.querySelector(selector);
}

function renderProductList(productList) {
  let content = "";
  for (let i = 0; i < productList.length; i++) {
    let products = productList[i];
    productArr.push(products);
    let htmlContent = `	<div class="product-content product-wrap clearfix">
		<div class="row">
				<div class="col-md-5 col-sm-12 col-xs-12">
					<div class="product-image"> 
						<img src="${products.img}" alt="194x228" class="img-responsive"> 
					</div>
				</div>
				<div class="col-md-7 col-sm-12 col-xs-12">
				<div class="product-deatil">
						<h5 class="name">
							<a href="#">
              ${products.name} <span>${products.type}</span>
							</a>
						</h5>
						<p class="price-container">
							<span>$ ${products.price}</span>
						</p>
						<span class="tag1"></span> 
				</div>
				<div class="description">
					<p>${products.desc}</p>
				</div>
				<div class="product-info smart-form">
							<button class="btn btn-primary" id="addCart" onclick="addToCart('${products.id}')">Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	</div>`;
    content += htmlContent;
  }

  getElem(".products__list").innerHTML = content;
}

function selectType() {
  getProducts()
    .then(function (res) {
      var productsList = res.data;
      const selectValue = document.getElementById("brands").value;
      var result =
        selectValue === "All"
          ? productsList
          : productsList.filter(function (sp) {
              return sp.type === selectValue;
            });
      renderProductList(result);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

// thêm sản phẩm vào giỏ hàng
function addToCart(id) {
  let pro = productArr.find((p) => p.id === id);
  // console.log(pro);
  // local storage

  if (isCheckProduct(id) >= 0) {
    updateQty(isCheckProduct(id));
  } else {
    cart.addProduct({ ...pro, qty: 1, total: 0 });
    let data = JSON.stringify(cart.productsCart);
    // console.log(data);
    localStorage.setItem("cart", data);
    renderReloadCart(cart.productsCart);
  }
  totalMoney();
  totalProduct(id);
  ValueQty(cart.productsCart.length);
}

// Kiểm tra trùng sản phẩm
function isCheckProduct(id) {
  let flag = -1;
  const prod = cart.productsCart;
  for (let i = 0; i < prod.length; i++) {
    if (prod[i].id === id) {
      flag = i;
      break;
    }
  }

  return flag;
}

// Update số lượng sản phẩm
function updateQty(index) {
  const prod = cart.productsCart;
  for (let i = 0; i < prod.length; i++) {
    if (i === index) {
      prod[i].qty += 1;
      break;
    }
  }
  renderReloadCart(cart.productsCart);
}

function ValueQty(length) {
  // console.log(length);
  getElem(".quantity-cart").innerHTML = length;
  getElem(".quantity").innerHTML = length;
}
