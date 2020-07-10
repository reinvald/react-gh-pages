import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
        <Navbar.Brand href="/">Aavo Reinvald</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://reinvald.com/#/about">about</Nav.Link>
            <Nav.Link href="https://reinvald.com/#/technical">
              technical
            </Nav.Link>
            <Nav.Link href="https://reinvald.com/#/fun">fun + misc</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <div class="icons">
              <ul class="navbar-nav ml-auto nav-flex-icons">
                <li>
                  <a
                    href="mailto:aavo@reinvald.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span style={{ color: "white" }}>
                      <i class="p-2 fa fa-envelope-o"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/reinvald"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span style={{ color: "white" }}>
                      <i class="p-2 fa fa-linkedin"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/reinvald"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span style={{ color: "white" }}>
                      <i class="p-2 fa fa-github"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/baltic.boy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span style={{ color: "white" }}>
                      <i class="p-2 fa fa-instagram"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
