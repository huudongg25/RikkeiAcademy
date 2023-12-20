//Lấy được id từ local
let productsLocal = JSON.parse(localStorage.getItem("products"));
let productDetaill = JSON.parse(localStorage.getItem("productDetail"));
let productFinded = productsLocal.find((item) => item.id === productDetaill.id);
// Thêm vào giỏ hàng
// render detail sản phẩm
function renderProductDetail() {
  const smallImgProduct = document.getElementById("list-product");
  const largeImgProduct = document.querySelector("#big-img");
  const renderDetails = document.querySelector(".product-item-title");
  let bigImg = "";
  let smallImg = "";
  let productDetail = "";
  let img = productFinded.img;
  img.forEach((element, index) => {
    smallImg += ` <a
                class="list-group-item list-group-item-action"
                href="#product-${index}"
                ><img class="product-image "
                   src=${element}
               /></a>`;
    bigImg += `<h4 id="product-${index}">
                <img class="product-image"
                  src=${element}
                 />
               </h4>`;
  });
  productDetail += ` <p id="product-name">${productFinded.name}</p>
            <p id="product-price">$ ${productFinded.price.toFixed(1)}</p>
            <hr />
            <p>Buy 3+ Minimalist Candles, Get 15% off plus Free Shipping*</p>
            <input disabled type="number" min="1" value="1" />
            <br />
            <button onclick="handleAddToCart(${
              productFinded.id
            })">ADD TO CART</button>`;
  smallImgProduct.innerHTML = smallImg;
  largeImgProduct.innerHTML = bigImg;
  renderDetails.innerHTML = productDetail;
}
renderProductDetail();
// Thêm sản phẩm vào giỏ hàng
function handleAddToCart(productId) {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  if (!userLogin) {
    window.location = "./login.html";
  }
  if (userLogin.role == "admin") {
    alert("Bạn không có quyền đặt hàng.");
    return;
  }
  let accountDB = JSON.parse(localStorage.getItem("accountDB")) || [];
  let account = JSON.parse(localStorage.getItem("userLogin"));
  let productToCart = productsLocal.find((item) => item.id == productId);
  let checkIndex = account.cart.findIndex(
    (item) => item.id == productToCart.id
  );
  if (checkIndex >= 0) {
    account.cart = account.cart.map((item) => {
      if (item.id == productToCart.id) {
        if (productToCart.quantity >= item.quantity) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          alert("Số lượng bạn chọn đã đạt mức tối đa của sản phẩm này");
          return { ...item, quantity: productToCart.quantity };
        }
      }
    });
  } else {
    account.cart.push({ ...productToCart, quantity: 1 });
    alert("Thêm sản phẩm thành công");
  }
  let cartAccountDB = accountDB.find((item) => item.email == account.email);
  cartAccountDB.cart = account.cart;
  localStorage.setItem("userLogin", JSON.stringify(account));
  localStorage.setItem("accountDB", JSON.stringify(accountDB));
}
