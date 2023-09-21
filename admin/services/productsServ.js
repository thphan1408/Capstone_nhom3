const BASE_URL = "https://65056d34ef808d3c66f005cd.mockapi.io/Products";

function getProductList(name) {
  return axios({
    url: BASE_URL,
    method: "GET",

    params: {
      name: name || undefined,
    },
  });
}

function delProductByID(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
}

function addNewProduct(sp) {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: sp,
  });
}

function getProductByID(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
}

function updateProductByID(id, sp) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: sp,
  });
}
