import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate=useNavigate();

    const logoutfunc=()=>{
        try{
            signOut(auth)
            navigate("/login");
        }
        catch{
            console.log("Error during logout!!!!!");
        }
    }

    return (
        <div>
            <button className="logout" onClick={logoutfunc}>Logout</button>
        </div>
    )
}

export default Logout
