import { useState } from "react";
import { registerUserService } from "../services/authService";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const registerUser = async (displayName, email, password, file) => {
    try {
      await registerUserService(displayName, email, password, file);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong!");
    }
  };

  return { registerUser, errorMessage };
};

export default useRegister;
