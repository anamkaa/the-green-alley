import React from 'react';
import { CaretRight } from 'phosphor-react';
import {Link} from "react-router-dom";

const Signupform = () => {
  return (
    <>
    <div className="main-wrap">
      <div className="gh-login-wrap">

        <div className="gh-login-title h5 text-center">Signup</div>

        <div className="gh-input-wrap-col gh-input-margin">
          <label for="gh-fname" className="gh-input-text">First Name*</label>
          <input type="text" id="gh-fname" className="gh-input" required/>
        </div>

        <div className="gh-input-wrap-col gh-input-margin">
          <label for="gh-lname" className="gh-input-text">Last Name*</label>
          <input type="text" id="gh-lname" className="gh-input" required/>
        </div>

        <div className="gh-input-wrap-col gh-input-margin">
          <label for="gh-email" className="gh-input-text">Email addess*</label>
          <input type="text" id="gh-email" className="gh-input" required/>
        </div>

        <div className="gh-input-wrap-col gh-input-margin">
          <label for="gh-number" className="gh-input-text">Contact Number</label>
          <input type="number" id="gh-number" className="gh-input" />
        </div>

        <div className="gh-input-wrap-col gh-input-margin">
          <label for="gh-password" className="gh-input-text">Password</label>
          <input type="password" id="gh-password" className="gh-input" required/>
        </div>

        <div className="gh-input-wrap-col gh-input-margin">
          <label for="gh-cPassword" className="gh-input-text">Confirm Password</label>
          <input type="password" id="gh-cPassword" className="gh-input"required />
        </div>

        <div className="gh-input-wrap-row gh-input-margin">
          <input type="checkbox" name="" id="accept" className="gh-checkbox" />
          <label for="accept" className="gh-checkbox-text gh-txt-sm"
            >I accept all terms and conditions</label
          >
        </div>

        <div className="gh-input-wrap-col gh-input-margin">
          <button className="gh-login-btn">Create New Account</button>
        </div>

        <div className="gh-input-wrap-row gh-input-margin justify-center">
         <Link to="/login"><a href="/page_layouts/login.html"> 
            <div className="gh-checkbox-text gh-input-wrap-row justify-center "> Already have an account
            <CaretRight size={12} className="gh-chev"/>
             </div></a></Link> 
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Signupform;