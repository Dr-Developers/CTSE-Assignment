import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./login.css";
import logo from "../../assets/images/logo-no-background.png";
import login_image from "../../assets/images/login-image.png";

const Login = () => {
  return (
    <MDBRow className="g-0 align-items-center">
      <MDBCol col="6">
        <MDBCard
          className="my-5 cascading-right"
          style={{
            background: "hsla(0, 0%, 100%, 0.55)",
            backdropFilter: "blur(30px)",
          }}
        >
          <MDBCardBody className="p-5 shadow-5 text-center">
            <img src={logo} width="70" height="80" />
            <h2 className="fw-bold mb-5">Welcome to Pasta Hub</h2>

            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form3"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form4"
              type="password"
            />

            <div className="d-flex justify-content-end mb-4">
              <MDBBtn
                color="none"
                tag="a"
                className="mx-1"
                style={{ color: "#000" }}
              >
                Forget Password?
              </MDBBtn>
            </div>

            <MDBBtn className="w-100 mb-4" size="md">
              Login
            </MDBBtn>

            <div className="text-center">
              <p>Don't Have an Account{""}</p>
              <MDBBtn
                size="sm"
                tag="a"
                className="mx-1"
                style={{ color: "#fff" }}
              >
                Register Now
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col="6">
        <img
          src={login_image}
          className="w-100 rounded-4 shadow-4"
          alt=""
          fluid
        />
      </MDBCol>
    </MDBRow>
  );
};

export default Login;
