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
