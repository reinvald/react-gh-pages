import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

class Technical extends Component {
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
              <Nav.Link href="https://reinvald.com/#/">about me</Nav.Link>
              <Nav.Link href="https://reinvald.com/#/technical">
                the technical stuff
              </Nav.Link>
              <Nav.Link href="https://reinvald.com/#/fun">
                the fun stuff
              </Nav.Link>
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
              <h1 className="mt-5 header-text">education</h1>
              <p className="pt-3 main-text">
                I'm a senior and a candidate for a BSE in computer science with
                a minor in mathematics from the University of Pennsylvania. some
                of my relevant coursework includes Algorithmic Game Theory,
                Computer Architecture, Operating Systems, Data Structures and
                Algorithms, Scalable and Cloud Computing, Databases and
                Information Systems, Software Design, Discrete Mathematics,
                Number Theory, as well as Automata, Computability, and
                Complexity. I also hold a BA degree from the Central High School
                of Philadelphia.
              </p>
              <h1 className="pt-3 header-text">technical skills</h1>
              <p className="pt-3 main-text">
                I am most comfortable with Java, React, Node.js, HTML, C, LaTeX,
                SQL, Git, Scrum, Linux/OSX, AWS (EMR, DynamoDB), QA testing, and
                automated testing (Selenium). I'm a beginner at Python, OCaml,
                MongoDB, and Android. I currently serve as a CIS350 Project
                Manager and oversee three groups of four students in semester
                long projects.
              </p>

              <h1 className="pt-3 header-text">past, present, future</h1>
              <p className="pt-3 main-text">
                this past summer I was a software development intern at
                Ellucian. I spent this time working directly inbetween the devs
                and the QA team to optimize the automated testing suite and
                overall workflow. I'm currently working on{" "}
                <a href="https://www.amiai.space">AMiAI</a> (in alpha), a senior
                design project to study the potential for language models
                (namely OpenAI's GPT2) to be exploited to create malicious
                product reviews. upon graduating, I'll be a full-time software
                developer at Publicis Sapient in Chicago.
              </p>
              <p className="pt-3 main-text">
                <i>complete resume available upon request.</i>
              </p>
            </Col>
            <Col lg={true}>
              <Image
                className="mt-5 p-5"
                src={require("./img/logo.png")}
                alt="Central High School"
                fluid
              />
              <Image
                className="mt-5 p-5"
                src={require("./img/2-line-whitetext-colorshield.png")}
                alt="Penn Engineering"
                fluid
              />
              <Row className="align-items-center">
                <Col>
                  <Image
                    className="mt-5 mb-5 p-1"
                    src={require("./img/kisspng-java-programming-computer-programming-programming-coffee-jar-5ac598dbaa95c6.3825662815228991636987.png")}
                    alt="Java"
                    fluid
                  />
                </Col>
                <Col>
                  <Image
                    className="mt-5 mb-5 p-1"
                    src={require("./img/kisspng-node-js-javascript-website-development-express-js-weekly-2-5b7c78fc5a3e87.9717577015348840923697.png")}
                    alt="Node"
                    fluid
                  />
                </Col>
                <Col>
                  <Image
                    className="mt-5 mb-5 p-1"
                    src={require("./img/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png")}
                    alt="React"
                    fluid
                  />
                </Col>
                <Col>
                  <Image
                    className="mt-5 mb-5 p-1"
                    src={require("./img/kisspng-scrum-agile-software-development-user-experience-d-highly-organized-5adef161c81903.3849556415245602258196.png")}
                    alt="Scrum"
                    fluid
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Technical;
