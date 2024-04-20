/** @format */
import React from "react";


const Register = () => {
  return (
    
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">UMeChat</span>
        <span className="register">Register</span>
        <form action="">
          <input type="text" className="name"  placeholder="Enter your name"/>
          <input type="text" className="email" placeholder="Enter your email"/>
          <input type="password" className="password" placeholder="Enter your password"/>
          <input type="file" className="file" />
          <button className="signup">Sign Up</button>
        </form>
        <p>Do you have an account?Login Here</p>
      </div>
    </div>
  );
};

export default Register;
