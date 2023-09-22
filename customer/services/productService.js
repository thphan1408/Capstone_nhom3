const BASE_URL = "https://65056d34ef808d3c66f005cd.mockapi.io/Products";

function getProducts() {
  return axios({ url: BASE_URL, method: "GET" });
}
