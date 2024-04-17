import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../assets/images/logo-no-background.png";
import "./navigation_bar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-lg-4 fixed-top">
      <Navbar.Brand href="#home">
        <img src={logo} width="40" height="50" className="mx-4" />
        <b>PASTA HUB</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button">
        <span>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="nav-items-holder">
        <Nav className="ml-auto">
          <Nav.Link href="#orders">Orders</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <Nav.Link href="#login" className="text-warning login-btn">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
