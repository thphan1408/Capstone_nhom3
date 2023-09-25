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


