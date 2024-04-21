/** @format */
import React from "react";
import AvatarIcon from "../images/image_13406954.png";


const Login = () => {
  return (
    
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">UMeChat</span>
        <span className="register">Login</span>
        <form action="">
          <input type="text" className="email" placeholder="Email"/>
          <input type="password" className="password" placeholder="Password"/>
          <button className="login">Login</button>
        </form>
        <p>Don't have an account?<a style={{cursor:"pointer"}}src="">Register Here</a></p>
      </div>
    </div>
  );
};

export default Login;
