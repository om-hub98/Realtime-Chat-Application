import React, { useContext, useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from '../services/firebase';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { useSearchUser } from '../hooks/useSearchUser';

const Search = () => {
  const { setSelectedUser, setChatId } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  const [searchUser, setSearchUser] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { handleSearch, handleSelectUser } = useSearchUser(searchUser, setUser, setError);

  useEffect(() => {
    if (searchUser.trim() === "") {
      setUser(null);
      setError(false);
    }
  }, [searchUser]);

  //console.log("Search User: ", searchUser);

  const handleSearchUser = async () => {
    if (!searchUser.trim()) return;
    const userData = await handleSearch(searchUser);
    setUser(userData);
    console.log("User Data after search : ", userData);

  }

  const handleClick = async () => {
    await handleSelectUser();
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSearchUser();
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
