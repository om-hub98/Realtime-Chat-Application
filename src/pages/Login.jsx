/** @format */
import React, { useEffect, useState } from "react";
import AvatarIcon from "../images/image_13406954.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

  const[error,setError]=useState(false);
  const navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();

    const email=e.target[0].value;
    const password=e.target[1].value;

    try{
       await signInWithEmailAndPassword(auth, email, password)
        navigate("/");
    }catch(err) {
      setError(true);
    }

  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">LetsChat</span>
        <span className="login">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="text" className="email" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <button className="login-btn">Login</button>
          {error && <span style={{ color: "red" }}>Something Wrong!!</span>}
        </form>
        <p>Don't have an account?<Link style={{ cursor: "pointer" }} to="/signup">Register Here</Link></p>
      </div>
    </div>
  );
};

export default Login;
