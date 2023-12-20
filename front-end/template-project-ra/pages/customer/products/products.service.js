import { LoginRepository } from "./login.repository.js";

export class LoginService {
  login(userModel) {
    console.log("hello!! this is login logic.");
    const loginRepository = new LoginRepository();
    const user = loginRepository.getUserByEmailAndPassword(
      userModel.email,
      userModel.password
    );

    if (user) {
      return {
        status: "susscessed",
        message: "Login sucessful.",
        result: { ...user },
      };
    }

    return {
      status: "failed",
      message: "Login error.",
      result: null,
    };
  }
}
