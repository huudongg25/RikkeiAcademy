import React, { useState } from "react";
import "./Register.css";
import { UserAPI } from "../../../api/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const RegisterForm = ({ setIsShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, []);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const errors = {};

    if (email.trim() === "") {
      isValid = false;
      errors.email = "Please enter your email";
    } else if (!validateEmail(email)) {
      isValid = false;
      errors.email = "Please enter a valid email";
    }

    if (password.trim() === "") {
      isValid = false;
      errors.password = "Please enter your password";
    }

    if (firstName.trim() === "") {
      isValid = false;
      errors.firstName = "Please enter your first name";
    }

    if (lastName.trim() === "") {
      isValid = false;
      errors.lastName = "Please enter your last name";
    }

    if (birthday.trim() === "") {
      isValid = false;
      errors.birthday = "Please enter your birthday";
    }

    setErrors(errors);

    if (isValid) {
      const userCreate = {
        email,
        password,
        firstName,
        lastName,
        birthday,
      };

      UserAPI.register(userCreate)
        .then((data) => {
          toast.success(
            data.data.message,
            {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            },
            1000
          );
          setTimeout(() => {
            setIsShow(true);
          }, 2000);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center ">
      <ToastContainer />
      <div className="nike-unite-swoosh">
        <img
          src="https://s3.nikecdn.com/unite/app/912/images/swoosh_black.png"
          alt="nike"
        />
      </div>
      <div className="header-text">
        <span>BECOME A NIKE MEMBER</span>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <div className="register-panel-form">
          <div className="mb-3">
            <input
              type="email"
              className="form-control w-100 custom-input"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control w-100 custom-input"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control w-100 custom-input"
              id="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control w-100 custom-input"
              id="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="mb-3">
            <input
              type="date"
              className="form-control w-100 custom-input"
              id="birthday"
              placeholder="Birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            {errors.birthday && <p className="error">{errors.birthday}</p>}
          </div>

          <p className="register-panel-desc">
            By creating an account, you agree to Nike's{" "}
            <a
              href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=TR&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
              className="underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=TR&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
              className="underline"
            >
              Terms of Use
            </a>
            .
          </p>
          <button
            className="btn btn-primary register-panel-button"
            type="submit"
          >
            JOIN US
          </button>
          <p className="text-center mt-4">
            Already a member?{" "}
            <span
              onClick={() => setIsShow(true)}
              className="underline cursor-pointer text-logres"
            >
              Sign In.
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
