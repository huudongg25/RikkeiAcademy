const userLogin = JSON.parse(localStorage.getItem("userLogin"));
if (userLogin?.role !== "admin") {
  window.location = "../index.html";
}
const renderElement = document.getElementById("render-order");
function renderOrder(data) {
  if (data) {
    let order = "";
    data.forEach((item, index) => {
      order += `<tr>
              <td>${index + 1}</td>
              <td>${item.idOrder}</td>
              <td>${item.idUser}</td>
              <td>${item.date}</td>
              <td>$ ${Number(item.total).toFixed(1)}</td>
              <td>${item.status ? "Processing" : "Completed"}</td>
              <td><button id="change" onclick="handleChangeStatus('${item.idOrder
        }')">Change</button></td>
            </tr>`;
    });
    renderElement.innerHTML = order;
  } else { 
    let orderDataLocal = JSON.parse(localStorage.getItem("orders")) || [];
    let order = "";
    orderDataLocal.forEach((item, index) => {
      order += `<tr>
              <td>${index + 1}</td>
              <td>${item.idOrder}</td>
              <td>${item.idUser}</td>
              <td>${item.date}</td>
              <td>$ ${Number(item.total).toFixed(1)}</td>
              <td>${item.status ? "Processing" : "Completed"}</td>
              <td><button id="change" onclick="handleChangeStatus('${
                item.idOrder
              }')">Change</button></td>
            </tr>`;
    });
    renderElement.innerHTML = order;
  }
}
renderOrder();
function handleChangeStatus(id) {
  let orderDataLocal = JSON.parse(localStorage.getItem("orders")) || [];
  for (let i = 0; i < orderDataLocal.length; i++) {
    const order = orderDataLocal[i];
    // console.log(order);
    if (order.idOrder == id) {
      order.status = !order.status;
      break;
    }
  }
  localStorage.setItem("orders", JSON.stringify(orderDataLocal));
  renderOrder();
}
function handleSearch() {
  let productsLocal = JSON.parse(localStorage.getItem("orders"));
  const inputSearch = document.querySelector(".input-search");
  const inputSearchValue = inputSearch.value;
  console.log(inputSearchValue);
  const productsNeed = productsLocal.filter(
    (item) =>
      item.idUser.toLowerCase().includes(inputSearchValue.toLowerCase()) ||
      item.idOrder.toLowerCase().includes(inputSearchValue.toLowerCase()) 
  );
  console.log(11111111,productsNeed);
  if (inputSearchValue === "") {
     renderOrder(productsLocal);
  } else {
     renderOrder(productsNeed);
  }
}
