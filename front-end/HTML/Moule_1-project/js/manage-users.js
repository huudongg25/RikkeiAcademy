function getData() {
  const data = JSON.parse(localStorage.getItem("accountDB"));
  return data || [];
}
const userLogin = JSON.parse(localStorage.getItem("userLogin"));
if (userLogin?.role !== "admin") {
  window.location = "../index.html";
}

function renderUser(dataGetInput) {
  if (dataGetInput) {
    let user = "";
    const renderUser = document.querySelector(".render-user");
    dataGetInput.forEach((data, index) => {
      user += ` <tr>
              <td>${index + 1}</td>
              <td>${data.firstName}</td>
              <td>${data.email}</td>
              <td>${data.role}</td>
              <td>${data.active ? "Active" : "InActive"}</td>
              <td>
                <button style="${
                  data.role === "admin" ? "display:none" : " "
                }" class="change" onclick="handleChange('${
        data.email
      }')">change</button>
              </td>
            </tr>`;
    });
    renderUser.innerHTML = user;
  } else {
    let user = "";
    const dataLocal = getData();
    const renderUser = document.querySelector(".render-user");
    dataLocal.forEach((data, index) => {
      user += ` <tr>
              <td>${index + 1}</td>
              <td>${data.firstName}</td>
              <td>${data.email}</td>
              <td>${data.role}</td>
              <td>${data.active ? "Active" : "InActive"}</td>
              <td>
                <button style="${
                  data.role === "admin" ? "display:none" : " "
                }" class="change" onclick="handleChange('${
        data.email
      }')">change</button>
              </td>
            </tr>`;
    });
    renderUser.innerHTML = user;
  }
}
renderUser();
function handleChange(email) {
  const data = getData() || [];
  for (let index = 0; index < data.length; index++) {
    const user = data[index];
    if (user.email === email) {
      user.active = !user.active;
      break;
    }
  }
  localStorage.setItem("accountDB", JSON.stringify(data));
  renderUser();
}
/////////////////////////
//tìm kiếm
function handleSearch() {
  let productsLocal = JSON.parse(localStorage.getItem("accountDB"));
  const inputSearch = document.querySelector(".input-search");
  const inputSearchValue = inputSearch.value;
  console.log(inputSearchValue);
  let productsNeed = productsLocal.filter(
    (item) =>
      item.firstName.toLowerCase().includes(inputSearchValue.toLowerCase()) ||
      item.email.toLowerCase().includes(inputSearchValue.toLowerCase())
  );
  if (inputSearchValue === "") {
    renderUser(productsLocal);
  } else {
    renderUser(productsNeed);
  }
}
