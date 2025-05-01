import React, { useContext, useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import Chats from './Chats';
import Chat from './Chat';

const Search = ({ setSelectedUser, setChatId }) => {

  const [searchUser, setSearchUser] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);


  useEffect(() => {
    if (searchUser.trim() === "") {
      setUser(null);
      setError(false);
    }

  }, [searchUser]);

  console.log("Search User: ", searchUser);

  const handleSearch = async () => {
    if (!searchUser.trim()) return;

    console.log("Searching..............");
    const userRef = collection(db, "users");
    const q = query(userRef, where("displayName", "==", searchUser.trim()));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => { 
        setUser(doc.data());
        setError(false);
      });
    } catch (err) {
      console.error("Error searching user:", err);
      setError(true);
      setUser(null);
    }
  }
  
  const joinChatIds = (uid1, uid2) => {
    return [uid1, uid2].sort().join('_');
  };

  const handleClick = async () => {
    const chatId = joinChatIds(currentUser.uid, user.uid);
    console.log("ChatId FROM SEARCH: ", chatId);

    try {
      const result = await getDoc(doc(db, "chats", chatId));

      if (!result.exists()) {
        //create a  new chats in chats collection if chats does not exists
        await setDoc(doc(db, "chats", chatId), { message: [] });
      }

      // Pass data to the Home component -> Chat component
      setChatId(chatId);
      setSelectedUser(user);

    } catch (err) {
      console.error("Error creating chat:", err);
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          className="text"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={e => setSearchUser(e.target.value)}
        />
      </div>
      {error && <span style={{ color: "red" }}>User Not found!!</span>}
      {user && <div className="userChat" onClick={handleClick}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>
      }

    </div>
  )
}

export default Search
