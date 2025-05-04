import React, { useContext, useEffect, useState } from 'react';
import AddImage from "../images/image_13406954.png";
import Attach from "../images/file_13675756.png";
import { AuthContext } from '../context/AuthContext';
import { addDoc, arrayUnion, collection, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { v4 as uuidv4 } from 'uuid';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ChatContext } from '../context/ChatContext';
import { useSendMessage } from '../hooks/useMessage';
;


const Input = () => {
  const {selectedUser, chatId} = useContext(ChatContext);
  const {sendMessage} = useSendMessage();
  const [message, setMessage] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const [senderId, setSenderId] = useState(null);


  useEffect(() => {
  }, []);

  const handleMessageSend = async () => {
    if (!message.trim() && !img) return;
    sendMessage(chatId, message, img);
    setMessage("");
  }
  
  return (
    <div className="chatInput"> 
      <input type="text" 
      placeholder="Type Something...."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleMessageSend()}
      />
      <div className="sendButtons">
        <img src={Attach} alt="Attach"/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
            <img src={AddImage} alt="Gallary"/>
        </label>
        <button onClick={handleMessageSend} style={{cursor:"pointer"}}>Send</button>
      </div>
   </div>
  )
}

export default Input
