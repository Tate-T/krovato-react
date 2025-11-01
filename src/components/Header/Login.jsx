import "./Login.scss";
import "bootstrap";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";

const Login = (isLogged) => {
  function openModal() {
    // console.log(1);
  }
  return (
        <Link to="/login" className="loginBtn">Login</Link>
  );
};

export default Login;