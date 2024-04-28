/** @format */
import React from "react";
import AvatarIcon from "../images/image_13406954.png";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">LetsChat</span>
        <span className="login">Login</span>
        <form action="">
          <input type="text" className="email" placeholder="Email"/>
          <input type="password" className="password" placeholder="Password"/>
          <button className="login-btn">Login</button>
        </form>
        <p>Don't have an account?<Link style={{cursor:"pointer"}} to="/signup">Register Here</Link></p>
      </div>
    </div>
  );
};

export default Login;
