
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    login(email, password);
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">LetsChat</span>
        <span className="login">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="text" className="email" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <button className="login-btn">Login</button>
          {error && <span style={{ color: "red" }}>Something Wrong!!</span>}
        </form>
        <p>Don't have an account?<Link style={{ cursor: "pointer", paddingLeft:"0.3rem" }} to="/signup">Register Here</Link></p>
      </div>
    </div>
  );
};

export default Login;
