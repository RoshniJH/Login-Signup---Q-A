import React, { useEffect, useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useNavigate } from "react-router-dom";
const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const history = useNavigate();
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  console.log("formErrors", formErrors);
  const [isSubmit, setIsSubmit] = useState(false);
  console.log("isSubmit", isSubmit);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log("formValues", formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const handleSignup = (e) => {
    setAction("Sign Up");
    handleSubmit(e);
  };

  const handleLogin = (e) => {
    handleSubmit(e);
    setAction("Login");
  };

  useEffect(() => {
    if (action === "Login" && formValues.email && formValues.password) {
      console.log("login true");
      history("/questions", { state: formValues });
    }
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      history("/questions", { state: formValues });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="loginContainer">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                name="username"
                placeholder="Name"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
          )}
          {action === "Login" ? (
            <p></p>
          ) : (
            <p className="errorinput">{formErrors.username}</p>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="errorinput">{formErrors.email}</p>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <p className="errorinputpswd">{formErrors.password}</p>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password?
            <span> Click here!</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={handleSignup}
          >
            Sign Up
          </div>

          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={handleLogin}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
