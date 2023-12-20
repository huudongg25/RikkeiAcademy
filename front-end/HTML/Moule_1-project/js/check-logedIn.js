function isLogIn() {
  const data = JSON.parse(localStorage.getItem("isLogIn"));
  const userLogin = JSON.parse(localStorage.getItem("userLogin")) || {};
  const isAdmin = userLogin.role == "admin";
  const displayElement = document.querySelector(".display-userlogin");
  let displayName = " ";
  if (isAdmin) {
    displayName = `
    <li>
           <a href="../Admin/manage-users.html">Admin
             </a>
          </li>
          <li>
            <i class="fa-solid fa-magnifying-glass search"></i>
          </li>
          <li>
            <a href="./my-cart.html">
              <i class="fa-solid fa-cart-shopping"> </i
            ></a>
          </li>
          <li onclick="handleLogout()"> LOGOUT</li>`;
  } else if (data) {
    displayName = `<li>
          ${userLogin.firstName} ${userLogin.lastName}
          </li>
          <li>
            <i class="fa-solid fa-magnifying-glass search"></i>
          </li>
          <li><a href="./User-infor.html"><i class="fa-solid fa-user"></i></a></li>
          <li>
            <a href="./my-cart.html">
              <i class="fa-solid fa-cart-shopping"> </i
            ></a>
          </li>
          <li onclick="handleLogout()"> LOGOUT</li>`;
  } else if (!data) {
    displayName = ` 
    <li>
            <i class="fa-solid fa-magnifying-glass search"></i>
          </li>
          <li>
            <a href="./login.html"><i class="fa-solid fa-user"></i></a>
          </li>`;
  } else {
    displayName = ` 
          <li>
            <a href="./login.html"><i class="fa-solid fa-user"></i></a>
          </li>
          <li>
           <i class="fa-solid fa-magnifying-glass search"></i>
          </li>
          <li>
            <a href="./my-cart.html">
              <i class="fa-solid fa-cart-shopping"> </i
            ></a>
          </li> 
        `;
  }
  displayElement.innerHTML = displayName;
}
isLogIn();
function handleLogout() {
  localStorage.removeItem("userLogin");
  localStorage.removeItem("cart");
  localStorage.removeItem("isLogIn");
  window.location = "/index.html";
}
