import React from "react";
import { Button } from "react-bootstrap";
import pasta from "../../assets/images/Pasta-Image.png";
import "./carousel.css";

const Carousel = () => {
  return (
    <div className="hero-section bg-dark text-center text-white d-flex justify-content-center align-items-center">
      <div className="row gx-0">
        <div className="col-md-6 py-xl-5 px-xl-5 d-flex align-items-center justify-content-center text-uppercase welcome-text">
          <div className="container-lg d-block justify-content-center">
            <p className="text-white display-3">
              Welcome to your <br />
              favorite <span className="text-warning">pasta</span> hub.
            </p>
            <Button variant="warning" size="lg">
              ORDER NOW
            </Button>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center py-lg-5">
          <img src={pasta} className="image-holder" />
          {/*width="700" height="400"*/}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
