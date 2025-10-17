import Container from "../Container/Container";
import "./Login.scss";
import "bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ isLogged, setIsLogged, handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      handleLogin();
      navigate("/"); 
    }
  };


  if (isLogged) {
    return (
      <Container>
        <div className="loginPage">
          <h2>You are already logged in!</h2>
          <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="loginPage">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <input 
            className="loginInp" 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            className="loginInp" 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginBtn" type="submit">Login</button>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;