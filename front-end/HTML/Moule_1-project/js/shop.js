// hover vào ảnh hiện ra ảnh khác

// ẩn hiện navbar
const el = document.querySelector(".sub-menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  el.style.removeProperty("display");
  el.classList.toggle("active");
});

close.addEventListener("click", () => {
  el.style.display = "none";
});
function getData() {
  const data = JSON.parse(localStorage.getItem("products"));
  return data || [];
}
function renderProducts(data) {
  if (data) {
    let renderElement = document.querySelector(".render-products");
    let productList = "";
    data.forEach((product, index) => {
      productList += `<div class="col-xl-3 col-md-6 col-12">
              <div class="p-1 candle-item">
                <span class="tag-candle-item">BESTSELLER</span>
               <div class="add-to-cart-group"> <img class="img-1"
                  src="${product.img[0]}"
                />
                <img class="img-2" 
                  src="${product.img[1]}"
                />
                <button onclick="handleToDetail(${product.id})" class="btn-add-to-cart">
                  ADD TO CART 
                </button></div>
                <div class="title-candle">
                  <p>${product.type}</p>
                  <p>${product.name}</p>
                  <p>$ ${product.price}</p>
                </div>
              </div>
            </div>`;
    });
    renderElement.innerHTML = productList;
  } else {
    let products = getData();
    let renderElement = document.querySelector(".render-products");
    let productList = "";
    products.forEach((product, index) => {
      productList += `<div class="col-xl-3 col-md-6 col-12">
              <div class="p-1 candle-item">
                <span class="tag-candle-item">BESTSELLER</span>
               <div class="add-to-cart-group"> <img class="img-1"
                  src="${product.img[0]}"
                />
                <img class="img-2" 
                  src="${product.img[1]}"
                />
                <button onclick="renderDetails(${product.id})" class="btn-add-to-cart">  
                LEARN MORE
                </button></div>
                <div class="title-candle">
                  <p>${product.type}</p>
                  <p>${product.name}</p>
                  <p>$ ${product.price}</p>
                </div>
              </div>
            </div>`;
    });
    renderElement.innerHTML = productList;
  }
}
renderProducts();

// Thanh tìm kiếm
const search = document.querySelector(".search-product");
const openSearch = document.querySelector(".search");
openSearch.addEventListener("click", () => {
  document.querySelector(".search-product").classList.toggle("active");
});
// Tìm kiếm sản phẩm
function handleSearch() {
  let productsLocal = getData();
  const inputSearch = document.querySelector(".search-image-input");
  const inputSearchValue = inputSearch.value;
  console.log(inputSearchValue);
  const productsNeed = productsLocal.filter((item) =>
    item.name.toLowerCase().includes(inputSearchValue.toLowerCase())
  );

  if (inputSearchValue === "") {
    renderProducts(productsLocal);
  } else {
    renderProducts(productsNeed);
  }
}
// Lấy được id từng sản phẩm 1
const renderDetails = (id) => {
  const data = getData();
  const productDetail = data.find((item) => item.id == Number(id));
  localStorage.setItem("productDetail", JSON.stringify(productDetail));
  window.location.href = "./detail.html?id=" + id;
};
