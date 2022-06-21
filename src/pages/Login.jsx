import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Loginform from "../components/forms/Loginform";
import { useAuth } from "../context/auth-context";
import Logoutform from "../components/forms/Logoutform";

const Login = () => {
  const {
    user: { isLogged },
  } = useAuth();

  return (
    <>
      <Navbar />
      {isLogged ? <Logoutform /> : <Loginform />}
      <Footer />
    </>
  );
};

export default Login;
