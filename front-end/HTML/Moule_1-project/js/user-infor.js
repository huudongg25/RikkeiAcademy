const dataGetLocal = JSON.parse(localStorage.getItem("userLogin"));
const emailAccount = document.querySelector("#email-submited");
const firstName = document.getElementById("first-name-submited");
const lastName = document.getElementById("last-name-submited");
const address = document.getElementById("address-submited");
const phone = document.getElementById("phone-submited");
emailAccount.value = dataGetLocal.email;
firstName.value = dataGetLocal.firstName;
lastName.value = dataGetLocal.lastName;

if (dataGetLocal.address) {
  address.value = dataGetLocal.address;
} else {
  address.value = "";
}
if (dataGetLocal.phone) {
  phone.value = dataGetLocal.phone;
} else {
  phone.value = "";
}

///////////////////////////////////////////////////////////////////////////////

function handleEdit() {
  const getDataLocalUserInfor = JSON.parse(localStorage.getItem("userLogin"));
  const emailUpadte = document.getElementById("email-update");
  const firstName = document.getElementById("first-name-update");
  const lastName = document.getElementById("last-name-update");
  const address = document.getElementById("address-update");
  const phone = document.getElementById("phone-update");
  emailUpadte.value = getDataLocalUserInfor.email;
  firstName.value = getDataLocalUserInfor.firstName;
  lastName.value = getDataLocalUserInfor.lastName;
  if (getDataLocalUserInfor.address) {
    address.value = getDataLocalUserInfor.address;
  } else {
    address.value = "";
  }
  if (getDataLocalUserInfor.phone) {
    phone.value = getDataLocalUserInfor.phone;
  } else {
    phone.value = "";
  }
}
function handleUpdate() {
  let accountDB = JSON.parse(localStorage.getItem("accountDB")) || [];
  const email = document.getElementById("email-update");
  const firstName = document.getElementById("first-name-update");
  const lastName = document.getElementById("last-name-update");
  const addressUpdate = document.getElementById("address-update");
  const phoneNumberUpdate = document.getElementById("phone-update");
  let accountUpdate = accountDB.find((item) => item.email == email.value);
  if (accountUpdate) {
    accountUpdate.firstName = firstName.value;
    accountUpdate.lastName = lastName.value;
    accountUpdate.address = addressUpdate.value;
    accountUpdate.phone = phoneNumberUpdate.value;
  }
  localStorage.setItem("accountDB", JSON.stringify(accountDB));
  localStorage.setItem("userLogin", JSON.stringify(accountUpdate));
  window.location = "./user-infor.html";
}
