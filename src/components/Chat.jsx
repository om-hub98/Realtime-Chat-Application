/** @format */

import React from "react";
import MoreOption from "../images/menu_12800847.png";
import Video from "../images/video-camera_1159798.png";
import AddPeople from "../images/user-add_3917582.png";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Omraj</span>
        <div className="icons">
          <img src={Video} alt="Video icon" />
          <img src={AddPeople} alt="Add people icon" />
          <img src={MoreOption} alt="More Option" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
