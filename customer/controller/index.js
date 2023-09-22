function fetchProducts() {
  getProducts()
    .then((res) => {
      console.log(res.data);
      renderProductList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchProducts();

// thêm sản phẩm vào giỏ hàng
function addToCart() {
}
