import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUserService } from '../services/authService';

const Logout = () => {
    const navigate=useNavigate();
    const logoutfunc=()=>{
        try{
            logoutUserService();
            navigate("/login");
        }
        catch{
            console.log("Error during logout!!!");
        }
    }
    return (
        <div>
            <button className="logout" onClick={logoutfunc}>Logout</button>
        </div>
    )
}

export default Logout
