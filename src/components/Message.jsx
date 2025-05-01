/** @format */

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

const Message = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const auth = getAuth();

  const currentUserId = auth.currentUser?.uid;

  console.log("Chat Id FROM message : ", chatId.chatId.chatId);

  useEffect(() => {
    if (!chatId) return;

    const messagesRef = collection(db, `chats/${chatId.chatId.chatId}/messages`);
    console.log("Messages Ref : ", messagesRef);
    const q = query(messagesRef, orderBy('timestamp', 'asc')); // oldest to newest

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [chatId]);

  console.log("Messages : ", messages);
  console.log("Text : ",messages[0]?.text); ;

  return (
    <div className="message" style={{ flexDirection : "column" }}>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.senderId === currentUserId ? 'owner' : ''}`}
        >
          {/* <div className="messageInfo">
            <img
              src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="UserImage"
            /> */}
            {/* <span>{message.timestamp?.toDate
          ? message.timestamp.toDate().toLocaleTimeString()
          : ''}</span> */}
          {/* </div> */}
          <div className="messageContent">
            <p>{message?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;
