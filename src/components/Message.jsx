/** @format */

import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="UserImage"
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello Om</p>
        <img
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="UserImage"
        />
      </div>
    </div>
  );
};

export default Message;
