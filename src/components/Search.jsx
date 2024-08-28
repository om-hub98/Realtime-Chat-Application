import React, { useContext, useState } from 'react';
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext'; 

const Search = () => {

  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const {currentUser}=useContext(AuthContext);

  const handleSearch = async () => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("displayName", "==", userName));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setError(true);
    }
  }
  const handleClick = async ()=>{
    const combineId=
    currentUser.uid > user.uid 
    ? currentUser.uid + user.uid 
    : user.uid + currentUser.uid;

    try{
      const res= await getDocs(db,"chats",combineId);

      if(!res.exist()){
        //create a chats in chats collection
        await setDoc(doc(db,"chats",combineId),{message:[]});
      }
    }catch{
      
    }
  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" className="text" placeholder="Search..." onKeyDown={handleKey} onChange={e => setUserName(e.target.value)} />
      </div>
      {error && <span style={{color:"red"}}>User Not found!!</span>}
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
