import { LoginService } from "./login.service.js";
import { MessageUtil } from "../../utils/message.util.js";

// file event --> chỉ xử lý các event

// event submit login
window.onLogin = function () {
  const loginService = new LoginService();
  const messageUtil = new MessageUtil();

  //   lấy được email, password từ form

  const userModel = {
    email: "",
    password: "",
  };
  const ret = loginService.login(userModel);
  if (ret.status === "successed")
    messageUtil.showSuccessMessage(ret.message); // redirect to x page
  else messageUtil.showErrorMessage(ret.message);
};
