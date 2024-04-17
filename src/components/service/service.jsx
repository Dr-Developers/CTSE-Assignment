import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./service.css";
import customer_care from "../../assets/images/customer-care.png";
import delivery_bike from "../../assets/images/delivery-bike.png";
import map_icon from "../../assets/images/map-icon.png";

const Services = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-4">
        <Col>
          <h2>Your Most Trusted Pasta House</h2>
          <p className="service-description">
            Serving you rich & affordable varieties of homemade African blended
            pasta options. Packaged in a neat environment & Delivered to your
            doorstep hot and fresh. Smashed to lock in flavor with every
            mouthful. Served with specially seasoned Turkey, Chicken, or Beef.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="service-item mb-4">
          <div className="icon">
            <img src={delivery_bike} />
          </div>

          <h3>Fast Deliveries</h3>
          <p>
            We provide swift delivery of your amazing meals to wherever you are
            in the shortest time possible.
          </p>
        </Col>

        <Col md={4} className="service-item mb-4">
          <div className="icon">
            <img src={customer_care} />
          </div>

          <h3>Excellent Customer Care</h3>
          <p>
            Our award-winning customer service representatives are ready to
            attend to your orders and enquiries.
          </p>
        </Col>

        <Col md={4} className="service-item mb-4">
          <div className="icon">
            <img src={map_icon} />
          </div>

          <h3>Track Order</h3>
          <p>Our App would allow you track your orders (coming soon).</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
