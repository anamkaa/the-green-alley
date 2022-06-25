import React, { useState } from "react";
import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    user: { isLogged },
    setUser,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async () => {
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });

      localStorage.setItem("token", JSON.stringify(data.encodedToken));
      setUser({
        tokenVal: JSON.stringify(data.encodedToken),
        isLogged: true,
        userInfo: data.foundUser,
      });
      navigate(location.state.from.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  const guestLoginHandler = async () => {
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: "guestuser@gmail.com",
        password: "guestuser",
      });

      localStorage.setItem("token", JSON.stringify(data.encodedToken));
      setUser({
        tokenVal: JSON.stringify(data.encodedToken),
        isLogged: true,
        userInfo: data.foundUser,
      });
      console.log(data);

      console.log(location.state.from.pathname);
      navigate(location.state.from.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-wrap">
        <div className="gh-login-wrap">
          <div className="gh-login-title h5 text-center">Login</div>

          <div className="gh-input-wrap-col gh-input-margin">
            <label for="gh-email" className="gh-input-text">
              Email addess
            </label>
            <input
              type="text"
              id="gh-email"
              className="gh-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div className="gh-input-wrap-col gh-input-margin">
            <label for="gh-password" className="gh-input-text">
              Password
            </label>
            <input
              type="password"
              id="gh-password"
              className="gh-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="gh-input-wrap-row gh-input-margin">
            <div className="gh-input-wrap-row">
              <input
                type="checkbox"
                name=""
                id="accept"
                className="gh-checkbox"
              />
              <label for="accept" className="gh-checkbox-text gh-txt-sm">
                Remember me
              </label>
            </div>
            <div className="gh-green-text gh-txt-sm">
              <a href="#"> Forgot your Password?</a>
            </div>
          </div>

          <div className="gh-input-wrap-col gh-input-margin">
            <button
              className="gh-login-btn"
              onClick={() => {
                loginHandler();
              }}
            >
              {isLogged ? "Logout" : "Login"}
            </button>
            <button
              className="gh-login-btn"
              onClick={() => {
                guestLoginHandler();
              }}
            >
              Login as Guest
            </button>
          </div>

          <div className="gh-input-wrap-row gh-input-margin justify-center">
            <Link to="/signup">
              <a href="/page_layouts/signup.html">
                <div className="gh-checkbox-text gh-input-wrap-row justify-center">
                  Create New Account
                  <CaretRight size={12} className="gh-chev" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginform;
