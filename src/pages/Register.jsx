import React from "react";
import AvatarIcon from "../images/image_13406954.png";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";

const Register = () => {
  const { registerUser, errorMessage } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    registerUser(displayName, email, password, file);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">LetsChat</span>
        <span className="register">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={AvatarIcon} alt="avatar" style={{ width: "50px", height: "50px" }} />
            <span>Add an Avatar</span>
          </label>
          <button className="signup">Sign Up</button>
          {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
        </form>
        <p>
          Do you have an account?{" "}
          <Link style={{ cursor: "pointer" }} to="/login">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
