const BASE_URL = "https://65056d34ef808d3c66f005cd.mockapi.io/Products";

function getProducts() {
  return axios({ url: BASE_URL, method: "GET" });
}

function getProductById(id) {
  return axios({ url: `${BASE_URL}/${id}`, method: "GET" });
}

// function addProduct() {
//   return axios({ url: BASE_URL, method: "POST" });
// }
