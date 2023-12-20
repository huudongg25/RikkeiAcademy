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
// chặn action của form
const formElement = document.getElementById("form-register");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit(e);
});

function handleSubmit() {
  const accountsDB = getDataLocal();
  const userRegister = getDataForm();
  if (!userRegister) {
    return;
  }
  for (let i = 0; i < accountsDB.length; i++) {
    if (userRegister.email == accountsDB[i].email) {
      alert("Email này đã tồn tại vui lòng nhập email mới.");
      return;
    }
  }
  if (accountsDB.length === 0) {
    userRegister.role = "admin";
    userRegister.id = 0; // Gán id là 0 cho người đăng ký đầu tiên
  } else {
    const maxId = Math.max(...accountsDB.map((item) => item.id));
    userRegister.role = "user";
    userRegister.cart = [];
    userRegister.id = maxId + 1; // Gán id là maxId + 1 cho người đăng ký mới
  }
  console.log(accountsDB);
  accountsDB.push(userRegister);
  localStorage.setItem("accountDB", JSON.stringify(accountsDB));
  alert("Đăng ký thành công")
  window.location ="./login.html"
}

function getDataForm() {
  const firstNameValue = document
    .getElementById("first-name")
    .value
    .trim();
  const lastNameValue = document
    .getElementById("last-name")
    .value
    .trim();
  const email = document
    .getElementById("email")
  const emailValue= email.value.toLowerCase().trim();
  const passwordValue = document
    .getElementById("password")
    .value.toLowerCase()
    .trim();
  const repeatPasswordValue = document
    .getElementById("repeat-password")
    .value.toLowerCase()
    .trim();
  const user = {
    active: true,
    firstName: firstNameValue,
    lastName: lastNameValue,
    email: emailValue,
    password: passwordValue,
    repeatPassword: repeatPasswordValue,
  };
  console.log(user);
  const error = checkValidator(user);
  renderError(error);
  if (!error.isError) {
    delete user.repeatPassword;
    return user;
  }
}
function getDataLocal() {
  const data = JSON.parse(localStorage.getItem("accountDB"));
  return data || [];
}
function checkValidator(user) {
  const error = {
    isError: false,
    passwordMessage: "",
    repeatPasswordMessage: "",
  };
  if (user.password.length < 8) {
    error.isError = true;
    error.passwordMessage = "Vui lòng nhập mật khẩu dài hơn 8 ký tự ";
  }
  if (user.repeatPassword !== user.password) {
    error.isError = true;
    error.repeatPasswordMessage = "Mật khẩu không khớp";
  }
  return error;
}
function renderError(error) {
  const passwordError = document.querySelector("#error-password");
  const repeatPasswordError = document.querySelector("#error-repeat-password");
  passwordError.innerHTML = error.passwordMessage;
  repeatPasswordError.innerHTML = error.repeatPasswordMessage;
}

