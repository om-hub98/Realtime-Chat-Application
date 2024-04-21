/** @format */
import React from "react";
import AvatarIcon from "../images/image_13406954.png";


const Register = () => {
  return (
    
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">UMeChat</span>
        <span className="register">Register</span>
        <form action="">
          <input type="text" className="name"  placeholder="Display name"/>
          <input type="text" className="email" placeholder="Email"/>
          <input type="password" className="password" placeholder="Password"/>
          <input style={{display:"none"}} type="file" className="file" id="file"/>
          <label htmlFor="file">
            <img style={{width:"50px",height:"50px"}}src={AvatarIcon} alt="avatar"/>
            <span>Add an Avatar</span>
          </label>
          <button className="signup">Sign Up</button>
        </form>
        <p>Do you have an account?<a style={{cursor:"pointer"}}src="">Login Here</a></p>
      </div>
    </div>
  );
};

export default Register;
