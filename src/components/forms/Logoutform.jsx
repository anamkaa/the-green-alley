import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { CaretRight } from "phosphor-react";
import { useAuth } from "../../context/auth-context";
import toast from "react-hot-toast";

const Logoutform = () => {
  const {
    user: { userInfo },
    setUser,
  } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setUser({
      isLogged: false,
    });
    toast.success("Logged out");
    navigate("/");
  };

  return (
    <>
      <div className="main-wrap">
        <div className="gh-login-wrap">
          <div className="gh-login-title h5 text-center">
            Welcome {userInfo?.firstName}
          </div>

          <div className="gh-input-wrap-col gh-input-margin">
            <button
              className="gh-login-btn"
              onClick={() => {
                logoutHandler();
              }}
            >
              Logout
            </button>
          </div>

          <div className="gh-input-wrap-row gh-input-margin justify-center">
            <Link to="/">
              <a href="/page_layouts/signup.html">
                <div className="gh-checkbox-text gh-input-wrap-row justify-center">
                  Go Back to Homepage
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

export default Logoutform;
