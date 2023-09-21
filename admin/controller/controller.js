function renderProductsList(productsList) {
  var content = "";
  for (var i = 0; i < productsList.length; i++) {
    var product = productsList[i];
    var contentTr = `
        <tr>
           <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
            <img src="${product.img}" alt="" width="250" height="150" />
           </td>
            <td>${product.desc}</td>
            <td>${product.type}</td>
            <td>
                <button class="btn btn-warning" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn btn-danger" onclick="delProduct(${product.id})">Delete</button>
            </td>
        </tr>
        `;

    content += contentTr;
  }

  document.querySelector("#tableListProduct").innerHTML = content;
}

function getInfor() {
  var id = document.querySelector("#id").value;
  var name = document.querySelector("#name").value;
  var price = document.querySelector("#price").value;
  var screen = document.querySelector("#screen").value;
  var backCamera = document.querySelector("#backCamera").value;
  var frontCamera = document.querySelector("#frontCamera").value;
  var img = document.querySelector("#img").value;
  var desc = document.querySelector("#desc").value;
  var type = document.querySelector("#type").value;

  return new Product(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type
  );
}
function resetForm() {
  document.querySelector("#id").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#screen").value = "";
  document.querySelector("#backCamera").value = "";
  document.querySelector("#frontCamera").value = "";
  document.querySelector("#img").value = "";
  document.querySelector("#desc").value = "";
  document.querySelector("#type").value = "Select Type";
}

function offValid() {
  document.querySelector("#tbName").style.display = "none";
  document.querySelector("#tbPrice").style.display = "none";
  document.querySelector("#tbScreen").style.display = "none";
  document.querySelector("#tbBackCamera").style.display = "none";
  document.querySelector("#tbFrontCamera").style.display = "none";
  document.querySelector("#tbImage").style.display = "none";
  document.querySelector("#tbDesc").style.display = "none";
  document.querySelector("#tbType").style.display = "none";
}
function fetchProductsList() {
  getProductList()
    .then(function (res) {
      console.log("res", res.data);
      renderProductsList(res.data);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

fetchProductsList();

//xóa SP
function delProduct(id) {
  delProductByID(id)
    .then(function (res) {
      fetchProductsList();
      console.log("sản phẩm bị xóa", res.data);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}

//Thêm sản phẩm
function addProduct() {
  var sp = getInfor();
  console.log("sp: ", sp);

  // kiểm tra tên sản phẩm
  valid = kiemTraRong(sp.name, "#tbName", "Tên sản phẩm không được để trống !");
  //kiểm tra giá
  valid &= kiemTraSoRong(sp.price, "#tbPrice", "Giá không được để trống !");

  // kiểm tra màn hình
  valid &= kiemTraRong(
    sp.screen,
    "#tbScreen",
    "Màn hình không được để trống !"
  );

  //kiểm tra camera sau
  valid &= kiemTraRong(
    sp.backCamera,
    "#tbBackCamera",
    "Camera sau không được để trống !"
  );

  //kiểm tra camera trước
  valid &= kiemTraRong(
    sp.frontCamera,
    "#tbFrontCamera",
    "Camera trước không được để trống !"
  );

  //kiểm tra image link
  valid &= kiemTraRong(sp.img, "#tbImage", "Image link không được để trống !");

  //kiểm tra mô tả
  valid &= kiemTraRong(sp.desc, "#tbDesc", "Mô tả không được để trống !");
  //kiểm tra loại sản phẩm
  valid &=
    kiemTraRong(sp.type, "#tbType", "Loại sản phẩm không được để trống !") &&
    kiemTraOption(sp.type, "#tbType", "Vui lòng chọn 1 loại sản phẩm");

  if (valid) {
    addNewProduct(sp)
      .then(function (res) {
        console.log("res", res);
        $("#myModal").modal("hide");

        fetchProductsList();
      })
      .catch(function (err) {
        console.log(err);
      });
    resetForm();
  }
}
//Sửa sản phẩm
function editProduct(id) {
  offValid();
  getProductByID(id)
    .then(function (res) {
      console.log("res", res.data);
      var sp = res.data;
      document.querySelector("#id").value = sp.id;
      document.querySelector("#name").value = sp.name;
      document.querySelector("#price").value = sp.price;
      document.querySelector("#screen").value = sp.screen;
      document.querySelector("#backCamera").value = sp.backCamera;
      document.querySelector("#frontCamera").value = sp.frontCamera;
      document.querySelector("#img").value = sp.img;
      document.querySelector("#desc").value = sp.desc;
      document.querySelector("#type").value = sp.type;

      $("#myModal").modal("show");
    })
    .catch(function (err) {
      console.log("err", err);
    });
}
//Cập nhật sản phẩm
function updateProduct() {
  var sp = getInfor();
  console.log("sp: ", sp);

  updateProductByID(sp.id, sp)
    .then(function (res) {
      console.log("res", res);

      $("#myModal").modal("hide");
      resetForm();

      fetchProductsList();
    })
    .catch(function (err) {
      console.log("err", err);
    });
}
//Tìm kiếm sản phẩm theo tên
function searchProductByName() {
  var keyName = document
    .querySelector("#searchName")
    .value.trim()
    ?.toLowerCase();
  getProductList()
    .then(function (res) {
      console.log("res", res);
      var productsList = res.data;
      var result = productsList.filter(function (sp) {
        return sp.name.toLowerCase().includes(keyName);
      });

      renderProductsList(result);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}
//Tìm kiếm bằng sự kiến nhấn nút enter
document
  .querySelector("#searchName")
  .addEventListener("keydown", function (event) {
    console.log("event", event);
    if (event.key !== "Enter") return;
    var name = event.target.value;
    getProductList(name)
      .then(function (res) {
        console.log("res: ", res.data);
        renderProductsList(res.data);
      })
      .catch(function (err) {
        console.log("err", err);
      });
  });
//Sắp xếp sản phẩm tăng dần
function arrangeProductMoneyAscending() {
  getProductList()
    .then(function (res) {
      console.log("res", res);
      var productsList = res.data;
      var result = productsList.sort(function (a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
      });
      renderProductsList(result);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}
//Sắp xếp sản phẩm giảm dần
function arrangeProductMoneyDescending() {
  getProductList()
    .then(function (res) {
      console.log("res", res);
      var productsList = res.data;
      var result = productsList.sort(function (a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
      });
      renderProductsList(result);
    })
    .catch(function (err) {
      console.log("err", err);
    });
}
