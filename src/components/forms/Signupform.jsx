import React, { useState } from "react";
import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signupform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const navigate = useNavigate();

  const signupHandler = async () => {
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      toast.success("Successfully registered");
      console.log(data);
      localStorage.setItem("token", data.encodedToken);
      console.log("user signed up and token saved");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-wrap">
        <div className="gh-login-wrap">
          <div className="gh-login-title h5 text-center">Signup</div>

          <div className="gh-input-wrap-col gh-input-margin">
            <label for="gh-fname" className="gh-input-text">
              First Name*
            </label>
            <input
              type="text"
              id="gh-fname"
              className="gh-input"
              required
              onChange={(e) => {
                setFname(e.target.value);
              }}
              value={firstName}
            />
          </div>

          <div className="gh-input-wrap-col gh-input-margin">
            <label for="gh-lname" className="gh-input-text">
              Last Name*
            </label>
            <input
              type="text"
              id="gh-lname"
              className="gh-input"
              required
              onChange={(e) => {
                setLname(e.target.value);
              }}
              value={lastName}
            />
          </div>

          <div className="gh-input-wrap-col gh-input-margin">
            <label for="gh-email" className="gh-input-text">
              Email addess*
            </label>
            <input
              type="text"
              id="gh-email"
              className="gh-input"
              required
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
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>

          <div className="gh-input-wrap-row gh-input-margin">
            <input
              type="checkbox"
              name=""
              id="accept"
              className="gh-checkbox"
            />
            <label for="accept" className="gh-checkbox-text gh-txt-sm">
              I accept all terms and conditions
            </label>
          </div>

          <div className="gh-input-wrap-col gh-input-margin">
            <button
              className="gh-login-btn"
              onClick={() => {
                signupHandler();
              }}
            >
              Create New Account
            </button>
          </div>

          <div className="gh-input-wrap-row gh-input-margin justify-center">
            <Link to="/login">
              <a href="/page_layouts/login.html">
                <div className="gh-checkbox-text gh-input-wrap-row justify-center ">
                  {" "}
                  Already have an account
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

export default Signupform;
