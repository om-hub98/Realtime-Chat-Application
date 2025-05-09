import React, { useContext } from "react";
import MoreOption from "../images/menu_12800847.png";
import Video from "../images/video-camera_1159798.png";
import AddPeople from "../images/user-add_3917582.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const ConversationWindow = () => {
  const {selectedUser, chatId} = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{selectedUser?.displayName}</span> 
        <div className="icons">
          <img src={Video} alt="Video icon" />
          <img src={AddPeople} alt="Add people icon" />
          <img src={MoreOption} alt="More Option" />
        </div>
      </div>
      <Messages chatId={{chatId}}/>
      <Input />
    </div>
  );
};

export default ConversationWindow;
