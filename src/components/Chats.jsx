/** @format */

import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ChatContext } from "../context/ChatContext";


const Chats = () => {
  const {setSelectedUser, setChatId } = useContext(ChatContext);
  const {currentUser} = useContext(ChatContext);

  const [userChats, setUserChats] = useState([]);


  useEffect(() => { 
    
    const fetchUserChats = async () => {
        const chats = await fetchConversations(currentUser.uid, db);
        const chatsWithUser = await Promise.all(
          chats.map(async (chat) => {
            const user = await fetchUserData(chat.otherUid, db);
            return { ...chat, user };
          })
        );
  
        setUserChats(chatsWithUser);
    };
    fetchUserChats();
  }, [currentUser?.uid]);

  async function fetchConversations(currentUid, db) {
    const chatsRef = collection(db, "chats");
    const snapshot = await getDocs(chatsRef);
    const userChats = [];
  
    snapshot.forEach(doc => {
      if (doc.id.includes(currentUid)) {
        const otherUid = doc.id.replace(currentUid, '').replace('_', '');
        userChats.push({ chatId: doc.id, otherUid });
      }
    });
    return userChats;
  }

  async function fetchUserData(uid, db) {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? userSnap.data() : null;
  }

  console.log("User Chats: ", userChats);

  function getSelectedUser(userChat) {
    setSelectedUser(userChat?.user);
    setChatId(userChat?.chatId);
  }

  return (
    <div className="chats">
      {userChats.map((userChat) => (
        <div className="userChat" key={userChat.chatId} onClick={() => getSelectedUser(userChat)}>
          <img src={userChat?.user?.photoURL} alt={userChat?.user?.displayName} />
          <div className="userChatInfo">
            <span>{userChat?.user?.displayName}</span>
            <p>{userChat?.user?.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
