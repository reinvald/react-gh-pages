import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

class Fun extends Component {
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
              <h1 className="mt-5 header-text">interests and hobbies</h1>
              <p className="pt-3 main-text">
                some of the things that I am most passionate about in life are
                music (listening to and collecting vinyl), sneaker collecting
                (hoarding in the eyes of some), music production, coffee, the
                76ers, veganism (4 years strong!), weightlifting (beginner), and
                of course, my friends and family ❤
              </p>
              <h1 className="pt-3 header-text">music</h1>
              <p className="pt-3 main-text">
                I think a person's taste in music says a lot of them. here are
                some of my favorite artists (new and old): Bob Dylan, LCD
                Soundsystem, Nas, Yung Lean, Kaytranada, Sufjan Stevens, Wilco,
                Whitney, Daft Punk, The Beatles, The Grateful Dead, Nas,
                HOMESHAKE, Henry Mancini, The Postal Service, Glenn Miller,
                MGMT...
              </p>
              <h1 className="pt-3 header-text">books</h1>
              <p className="pt-3 main-text">
                this year I have really been pushing myself to read more. so far
                I have read The Winter Fortress by Neal Bascomb, The Doors of
                Perception by Aldous Huxley, Hard-Boiled Wonderland and the End
                of the World by Haruki Murakami, The Third Policeman by Flann
                O'Brien, The Fifth Risk by Michael Lewis, To Kill a Mockingbird
                a Mockingbird by Harper Lee (didn't read it in high school!),
                The Splendid and the Vile by Erik Larson, and Born a Crime by
                Trevor Noah. I am now reading J Dilla's Donuts by Jordan
                Ferguson.
              </p>
              <h1 className="pt-3 header-text">film</h1>
              <p className="pt-3 main-text">
                movies are a big part of my life, too. I don't watch them all
                too often, but some of my favorites are Yellow Submarine,
                Raising Arizona, A Town Called Panic, and Full Metal Jacket.
              </p>
            </Col>
            <Col lg={true}>
              <Image
                className="mt-5 p-5"
                src={require("./img/kisspng-the-beatles-magical-mystery-tour-abbey-road-yellow-walrus-5acc006e8a2674.5985732215233188945659.png")}
                alt="Magical Mystery Tour"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Fun;
