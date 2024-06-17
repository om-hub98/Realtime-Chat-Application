/** @format */
import React, { useState } from "react";
import AvatarIcon from "../images/image_13406954.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;
    console.log("name: ",displayName," , email : ", email, ", password : ", password);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
        null,
        (error) => {
          setError(true);
        },
        () => {
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(response.user,{
                displayName,
                photoURL: downloadURL
            })

            await setDoc(doc(db,"users",response.user.uid),{
              uid: response.user.uid,
              displayName,
              email,
              photoURL:downloadURL
            })

            await setDoc(doc(db,"userChats",response.user.uid),{})
            navigate("/login")
          });
        }
      );
    } catch {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">LetsChat</span>
        <span className="register">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" className="name" placeholder="Display name" />
          <input type="text" className="email" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <input
            style={{ display: "none" }}
            type="file"
            className="file"
            id="file"
          />
          <label htmlFor="file">
            <img
              style={{ width: "50px", height: "50px" }}
              src={AvatarIcon}
              alt="avatar"
            />
            <span>Add an Avatar</span>
          </label>
          <button className="signup">Sign Up</button>
          {error && <span style={{ color: "red" }}>Something Wrong!!</span>}
        </form>
        <p>
          Do you have an account?
          <Link style={{ cursor: "pointer" }} to="/login">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
