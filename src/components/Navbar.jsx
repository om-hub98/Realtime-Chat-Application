/** @format */

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">LetsChat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        <span className="displayname">Omraj</span>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
