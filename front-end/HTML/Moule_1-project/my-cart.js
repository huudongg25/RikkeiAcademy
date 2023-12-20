let account = JSON.parse(localStorage.getItem("userLogin"));
let carts = account.cart;
function renderCart() {
  let account = JSON.parse(localStorage.getItem("userLogin"));
  let carts = account.cart;
  let productsCart = "";
  let total = "";
  let totalResult = carts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  carts.forEach((product) => {
    productsCart += `<div class="render-carts-item">
              <div class="carts-item-1">
                <div class="carts-item-1-img">
                  <img
                    src="${product.img[0]}"
                  />
                </div>
                <div class="carts-item-1-content">
                  <p>${product.name}</p>
                  <p> $${Number(product.price).toLocaleString()}</p>
                </div>
              </div>
              <div class="carts-item-2">
                <input  onchange="handleChange(${
                  product.id
                }, this.value)" type="number" min="1" value="${
      product.quantity
    }"/><br />
                <br />
                <button onclick="handleRemove(${product.id})">REMOVE</button>
              </div>
              <div class="carts-item-3"><p>$ ${Number(
                product.price
              ).toLocaleString()}</p></div>
            </div>`;
  });
  total = `<span>$ ${totalResult.toLocaleString()}</span>`;

  document.querySelector(".render-cartttt").innerHTML = productsCart;
  document.querySelector(".total-number").innerHTML = total;
}
renderCart();
///////////////////////////////////////////
// xóa sản phẩm trong giỏ hàng
function handleRemove(productId) {
  let account = JSON.parse(localStorage.getItem("userLogin"));
  let cart = account.cart;
  let newCarts = cart.filter((item) => {
    return item.id != productId;
  });
  account.cart = newCarts;
  localStorage.setItem("userLogin", JSON.stringify(account));
  renderCart();
}
// điều chỉnh số lượng
function handleChange(productId, value) {
  let accountDB = JSON.parse(localStorage.getItem("accountDB"));
  let account = JSON.parse(localStorage.getItem("userLogin"));
  let productsLocal = JSON.parse(localStorage.getItem("products"));
  let carts = account.cart;
  let productChange = carts.find((item) => item.id == productId);
  productChange.quantity = Number(value);
  productsLocal.find((item) => {
    if (item.id == productChange.id) {
      if (item.quantity <= productChange.quantity) {
        productChange.quantity = item.quantity;
      }
    }
  });
  carts.quantity = productChange.quantity;
  let accountChange = accountDB.find((item) => item.email == account.email);
  accountChange.cart = carts;
  localStorage.setItem("userLogin", JSON.stringify(account));
  localStorage.setItem("accountDB", JSON.stringify(accountDB));
  renderCart();
}
// Thanh toán
function handlePayment() {
  let products = JSON.parse(localStorage.getItem("products"));
  let accountDB = JSON.parse(localStorage.getItem("accountDB"));
  let account = JSON.parse(localStorage.getItem("userLogin"));
  let orderLocal = JSON.parse(localStorage.getItem("orders")) || [];
  let carts = account.cart;
  if (carts.length === 0) {
    alert("Không có sản phẩm nào trong giỏ hàng");
  } else if (carts.length > 0) {
    products.forEach((itemA) => {
      let productPayment = carts.find((itemB) => itemA.id == itemB.id);
      if (productPayment) {
        itemA.quantity -= productPayment.quantity;
      }
      console.log(products);
    });
    localStorage.setItem("products", JSON.stringify(products));

    let totalResult = carts.reduce((total, item) => {
      return Number(total + item.price * item.quantity);
    }, 0);
    let id = "ORDER_" + new Date().toISOString();
    let order = {
      idOrder: id,
      idUser: account.email,
      total: totalResult,
      status: true,
      detail: carts,
      date: new Date().toISOString(),
    };
    orderLocal.push(order);
    localStorage.setItem("orders", JSON.stringify(orderLocal));
    account.cart = [];
    let accountPayment = accountDB.find((item) => item.email == account.email);
    accountPayment.cart = [];
    localStorage.setItem("userLogin", JSON.stringify(account));
    localStorage.setItem("accountDB", JSON.stringify(accountDB));
  }
  window.location = "./my-cart.html";
  renderCart();
}

let orderLocal = JSON.parse(localStorage.getItem("orders")) || [];
const newArr = orderLocal.filter((el) => el.idUser === account.email);
function renderOrderHistory() {
  const renderElement = document.getElementById("render-order");
  let orderContent = "";
  newArr.forEach((item, index) => {
    orderContent += ` <tr>                   
      <th scope="row">${index + 1}</th>
      <td>${item.idOrder}</td>
      <td>${item.idUser}</td>
      <td>${item.date}</td>
      <td>$ ${Number(item.total).toFixed(1)}</td>
      <td class="status">Processing</td>
      <td><button class="btn-cancel"  onclick="handleCancel('${
        item.idOrder
      }')">Cancel</button></td>
    </tr>`;
  });
  renderElement.innerHTML = orderContent;
}
renderOrderHistory();

