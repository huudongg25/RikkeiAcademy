const userLogin = JSON.parse(localStorage.getItem("userLogin"));
if (userLogin?.role !== "admin") {
  window.location = "../index.html";
}
function getData() {
  const data = JSON.parse(localStorage.getItem("products"));
  return data || [];
}
function renderProduct(data) {
  if (data) {
    let productList = "";
    const renderElement = document.querySelector(".render-products");
    data.forEach((product, index) => {
      productList += `<tr>
              <td>${index + 1}</td>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.type}</td>
              <td>${product.price}</td>
              <td>${product.quantity}</td>
              <td >
                <button
                  type="button"
                  class="btn btn-primary mx-1"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Edit</button
                ><button  onclick="handleDelete(${
                  product.id
                })" class="btn btn-delete btn-danger " id="btnDelete">Delete</button>
              </td>
            </tr>`;
    });
    renderElement.innerHTML = productList;
  } else {
    let productList = "";
    const products = getData();
    const renderElement = document.querySelector(".render-products");
    products.forEach((product, index) => {
      productList += `<tr>
              <td>${index + 1}</td>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.type}</td>
              <td>${product.price}</td>
              <td>${product.quantity}</td>
              <td >
                <button
                  type="button"
                  class="btn btn-primary mx-1"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                   onclick="handleEdit(${product.id})"
                >
                  Edit</button
                ><button  onclick="handleDelete(${
                  product.id
                })" class="btn btn-delete btn-danger " id="btnDelete">Delete</button>
              </td>
            </tr>`;
    });
    renderElement.innerHTML = productList;
  }
}
renderProduct();
/////////////////////////////////////////////////////////////////////
// Thêm sản phẩm
function handleDelete(id) {
  const productsData = getData();
  console.log(productsData);
  const newData = productsData.filter((item) => {
    console.log(item.id);
    return Number(item.id) != Number(id);
  });
  localStorage.setItem("products", JSON.stringify(newData));
  renderProduct();
}
function handleAdd() {
  document.querySelector(".modalAdd").style.display = "block";
}
function getDataForm() {
  const data = getData();
  const nameInputValue = document.getElementById("name").value;
  const typeInputValue = document.getElementById("type").value;
  const priceInputValue = Number(document.getElementById("price").value);
  const quantityInputValue = Number(document.getElementById("quantity").value);
  const inputUrl1Value = document.getElementById("url-1").value;
  const inputUrl2Value = document.getElementById("url-2").value;
  const indexLast = data.length - 1;
  let id = data[indexLast].id + 1;
  const newProduct = {
    id: id,
    name: nameInputValue,
    img: [inputUrl1Value, inputUrl2Value],
    quantity: quantityInputValue,
    price: priceInputValue,
    type: typeInputValue,
  };

  return newProduct;
}
function addToStore() {
  const products = getData();
  const product = getDataForm();
  console.log(product);
  products.push(product);
  console.log(products);
  document.querySelector(".modalAdd").style.display = "none";
  localStorage.setItem("products", JSON.stringify(products));
  renderProduct();
} /////////////////////////////////////////////////////////////////////////////////
// Tìm kiếm sản phẩm trong trong trâng quản lý
function handleSearch() {
  let productsLocal = getData();
  const inputSearch = document.querySelector(".input-search");
  const inputSearchValue = inputSearch.value;
  console.log(inputSearchValue);
  let productsNeed = productsLocal.filter(
    (item) =>
      item.name.toLowerCase().includes(inputSearchValue.toLowerCase()) ||
      item.id == inputSearchValue ||
      item.type.toLowerCase().includes(inputSearchValue.toLowerCase()) ||
      item.quantity == inputSearchValue
  );
  if (inputSearchValue === "") {
    renderProduct(productsLocal);
  } else {
    renderProduct(productsNeed);
  }
}
////////////////////////////////////////////////////////////////
// Edit sản phẩm
let idUpdate;
function handleEdit(id) {
  idUpdate = id;
  const data = getData();
  let myData = data.find((item) => item.id == id);
  const idProduct = document.getElementById("id-product");
  const nameEdit = document.getElementById("name-product");
  const priceEdit = document.getElementById("price-product");
  const typeEdit = document.getElementById("type-product");
  const quantityEdit = document.getElementById("quantity-product");
  nameEdit.value = myData.name;
  priceEdit.value = myData.price;
  typeEdit.value = myData.type;
  quantityEdit.value = myData.quantity;
  idProduct.value = myData.id;
}
function handleUpdate() {
  const data = getData();
  const idProduct = document.getElementById("id-product");
  const nameEdit = document.getElementById("name-product");
  const priceEdit = document.getElementById("price-product");
  const typeEdit = document.getElementById("type-product");
  const quantityEdit = document.getElementById("quantity-product");
  console.log(nameEdit.value);
  console.log(priceEdit.value);
  console.log(typeEdit.value);
  console.log(quantityEdit.value);
  const newProductEdit = {
    id: idProduct.value,
    name: nameEdit.value,
    price: Number(priceEdit.value),
    type: typeEdit.value,
    quantity: Number(quantityEdit.value),
  };
  console.log(newProductEdit);

  const newData = data.map((item) => {
    if (item.id == idUpdate) {
      return {
        ...item,
        ...newProductEdit,
      };
    } else {
      return item;
    }
  });
  localStorage.setItem("products", JSON.stringify(newData));
  renderProduct();
}
