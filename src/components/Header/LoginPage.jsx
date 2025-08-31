import Container from "../Container/Container";
import "./Login.scss";
import "bootstrap";
import { useState } from "react";

export const LoginPage = ({isLogged, setIsLogged, handleLogin}) => {
    //const [isLogged, setIsLogged] = useState(false);


  return (
    <Container>
      <div className="loginPage">
        <h2>Login Page</h2>
        <input className="loginInp" type="text" placeholder="Username" />
        <input className="loginInp" type="password" placeholder="Password" />
        <button className="loginBtn" onClick={handleLogin}>Login</button>
      </div>
    </Container>
  );
};
