import React, { useContext, useEffect, useState } from 'react';
import AddImage from "../images/image_13406954.png";
import Attach from "../images/file_13675756.png";
import { AuthContext } from '../context/AuthContext';
import { addDoc, arrayUnion, collection, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const Input = ({chatId}) => {

  const [message, setMessage] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const [senderId, setSenderId] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSenderId(user.uid);  // Set the current user's UID as senderId
      } else {
        // Handle if the user is not authenticated (maybe redirect to login)
      }
    });
  }, []);

  const sendMessage = async () => {
    if (!message.trim() && !img) return;

    const messagesRef = collection(db, `chats/${chatId.chatId}/messages`);


    await addDoc(messagesRef, {
      text: message,
      senderId: senderId,
      timestamp: serverTimestamp(),
    });

    setMessage('');
  }
  
  return (
    <div className="chatInput"> 
      <input type="text" 
      placeholder="Type Something...."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <div className="sendButtons">
        <img src={Attach} alt="Attach"/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
            <img src={AddImage} alt="Gallary"/>
        </label>
        <button onClick={sendMessage} style={{cursor:"pointer"}}>Send</button>
      </div>
   </div>
  )
}

export default Input
