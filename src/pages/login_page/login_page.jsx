import React from "react";
import Login from "../../components/login/login";

const Login_Page = () => {
  document.title = "Login";
  return (
    <div className="bg-light vh-100 d-flex align-items-center">
      <div className="container-md">
        <Login />
      </div>
    </div>
  );
};

export default Login_Page;
