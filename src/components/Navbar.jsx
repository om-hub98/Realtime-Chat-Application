import React, { useContext } from "react";
import Logout from "../pages/Logout";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

  const {currentUser}=useContext(AuthContext);
  console.log("Current :",currentUser.photoURL);

  return (
    <div className="navbar">
      <span className="logo">LetsChat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="UserProfile" style={{width:"40px",height:"40px"}}/>
        <span className="displayname">{currentUser.displayName}</span>
        <Logout/>
      </div>
    </div>
  );
};

export default Navbar;
