import Container from "../Container/Container";
import "./Login.scss";
import "bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName, setPassword, login, logout, auth } from "../../redux/login/loginSlice";
import App from "../../App";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, password, isLogged } = useSelector((state) => state.login || {}); // safe

  const [localName, setLocalName] = useState(name || "");
  const [localPassword, setLocalPassword] = useState(password || "");

  // Навигация на главную страницу после успешного логина
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  const handleLogin = () => {
    if (localName && localPassword) {
      dispatch(setName(localName));
      dispatch(setPassword(localPassword));
      dispatch(auth());
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setLocalName("");
    setLocalPassword("");
  };

  return (
      <Container>
        <div className="loginPage">
          <h2>{isLogged ? `Welcome, ${name}!` : "Register Page"}</h2>

          {!isLogged ? (
              <>
                <input
                    className="loginInp"
                    type="text"
                    placeholder="Username"
                    value={localName}
                    onChange={(e) => setLocalName(e.target.value)}
                />
                <input
                    className="loginInp"
                    type="password"
                    placeholder="Password"
                    value={localPassword}
                    onChange={(e) => setLocalPassword(e.target.value)}
                />
                <button className="loginBtn" onClick={handleLogin}>
                  Register
                </button>
              </>
          ) : (
              <button className="loginBtn logout" onClick={handleLogout}>
                Logout
              </button>
          )}
        </div>
      </Container>
  );
};
export default AuthPage;