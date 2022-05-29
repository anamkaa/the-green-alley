import React from 'react';
import { CaretRight } from 'phosphor-react';
import {Link} from "react-router-dom";

const Loginform = () => {
  return (
    <>
    <div className="main-wrap">
      <div className="gh-login-wrap">
        <div className="gh-login-title h5 text-center">Login</div>

        <div className="gh-input-wrap-col gh-input-margin">
          <label for="gh-email" className="gh-input-text">Email addess</label>
          <input type="text" id="gh-email" className="gh-input" />
        </div>

        <div className="gh-input-wrap-col gh-input-margin">
          <label for="gh-password" className="gh-input-text">Password</label>
          <input type="password" id="gh-password" className="gh-input" />
        </div>

        <div className="gh-input-wrap-row gh-input-margin">
          <div className="gh-input-wrap-row">
            <input type="checkbox" name="" id="accept" className="gh-checkbox" />
            <label for="accept" className="gh-checkbox-text gh-txt-sm">Remember me</label>
          </div>
          <div className="gh-green-text gh-txt-sm"><a href="#"> Forgot your Password?</a></div>
        </div>

        <div className="gh-input-wrap-col gh-input-margin">
          <button className="gh-login-btn">Login</button>
        </div>

        <div className="gh-input-wrap-row gh-input-margin justify-center">
          <Link to="/signup"><a href="/page_layouts/signup.html">
            <div className="gh-checkbox-text gh-input-wrap-row justify-center">Create New Account
            <CaretRight size={12} className="gh-chev"/>
          </div>
        </a> </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Loginform;