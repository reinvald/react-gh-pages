import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class About extends Component {
  render() {
    document.body.className = "body-bg";

    return (
      <React.Fragment>
        <link
          href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css"
          rel="stylesheet"
        ></link>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="color-nav"
          variant="dark"
        >
          <Navbar.Brand href="/">aavo reinvald</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">about me</Nav.Link>
              <Nav.Link href="/technical">the technical stuff</Nav.Link>
              <Nav.Link href="/fun">the fun stuff</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <div class="icons">
                <ul class="navbar-nav ml-auto nav-flex-icons">
                  <li>
                    <a
                      href="mailto:reinvald@seas.upenn.edu"
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
        <Container>
          <Row className="align-items-center">
            <Col lg={true}>
              <h1 className="mt-5 header-text">a little about me</h1>
              <p className="pt-3 main-text">
                hello! my name is Aavo. I hail from Tartu, Estonia, but grew up
                in Philly. I'm a senior at the University of Pennsylvania and a
                proud alumnus of Central High School (275). I'm a candidate for
                a BSE degree in computer science and a minor in mathematics.
                upon completion of my degree I will be a fulltime software
                developer at Publicis Sapient in Chicago.
              </p>
              <h1 className="pt-3 header-text">what I do</h1>
              <p className="pt-3 main-text">
                the projects that have given me the most joy have involved
                full-stack development. my interests currently lie in algorithm
                design, game theory, software optimization, and humanitarian
                software development. namely, one of the things I am most
                passionate about is making computer science both more accessible
                and more approachable.
              </p>
              <h1 className="pt-3 header-text">a life changing experience</h1>
              <p className="pt-3 main-text">
                my current outlook on engineering has been largely shaped by my
                time in Rwanda. I taught CS at the Gashora Girls Academy of
                Science and Technology and helped students with their personal
                projects. my time at the academy left me with an understanding
                of the impact computer science can have on the lives of others.
                now, at the start of my professional career, I'm eager to design
                software that leaves a positive impact on the world and on those
                around me.
              </p>
            </Col>
            <Col lg={true}>
              <Image
                className="mt-5 p-5"
                src={require("./img/aavo_greyscale.png")}
                alt="Teaching at GGAST"
                fluid
                roundedCircle
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default About;
