import "./Login.scss";
import "bootstrap";
import { Link } from "react-router-dom";

export const Login = ({ isLogged }) => {

  if (isLogged) {
    return null;
  }

  return (
    <Link to="/login" className="loginBtn">
      Login
    </Link>
  );
};