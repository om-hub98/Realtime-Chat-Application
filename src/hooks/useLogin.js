import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";

const useLogin = () => {
    const[error,setError]=useState(false);
    const navigate=useNavigate();

    const login=async (email,password)=>{
        try{
            // Assuming you have a function to handle login logic
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        }catch(err) {
            setError(true);
        }
    }

    return {login,error};

}

export default useLogin;