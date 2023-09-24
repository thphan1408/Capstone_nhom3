let Cart = new CartArr();

function getElem(selector) {
  return document.querySelector(selector);
}

function renderProductList(productList) {
  let content = "";
  for (let i = 0; i < productList.length; i++) {
    let products = productList[i];
    Cart.addProduct(products);
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
							<button class="btn btn-primary" onclick="addToCart('${products.id}')">Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	</div>`;
    content += htmlContent;
  }

  getElem(".products__list").innerHTML = content;
}

// renderReloadCart();
// function renderReloadCart(productList) {
//   let content = "";
//   for (let j = 0; j < productList.length; j++) {
//     let product = productList[j];
//     let htmlContent = `
// 		<li>
// 			<img src="${product.img}" class="cart-thumb" alt="" />
// 			<h6><a href="#">${product.name}</a></h6>

// 			<p>${product.price}</p>
// 		</li>
// 	`;
//     content += htmlContent;
//   }

//   getElem(".listCard").innerHTML = content;
// }

// thêm sản phẩm vào giỏ hàng
function addToCart(id) {
  // console.log(id);
  let prod = Cart.productsCart.find((pro) => pro.id === id);
  getElem(".listCard").innerHTML += `
		<li>
				<img src="${prod.img}" class="cart-thumb img-fluid" alt="" />
				<strong>${prod.name} </strong>
				<span>${prod.type}</span>
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
