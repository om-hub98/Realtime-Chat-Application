import React from 'react'
import AddImage from "../images/image_13406954.png"
import Attach from "../images/file_13675756.png";

const Input = () => {
  return (
    <div className="chatInput">
      <input type="text" placeholder="Type Something...."/>
      <div className="sendButtons">
        <img src={Attach} alt="Attach"/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
            <img src={AddImage} alt="Gallary"/>
        </label>
        <button>Send</button>
      </div>
   </div>
  )
}

export default Input
