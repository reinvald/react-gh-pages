import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";

import "./App.css";

class About extends Component {
  render() {
    document.body.className = "css-selector";

    return (
      <React.Fragment>
        <link
          href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css"
          rel="stylesheet"
        ></link>
        <Header />
        <Container>
          <Row className="align-items-center">
            <Col lg={true}>
              <h1 className="mt-5 header-text">A Little About Me</h1>
              <p className="pt-3 main-text">
                Hello! My name is Aavo. I hail from Tartu, Estonia, but grew up
                in Philly. I'm a (somewhat) recent graduate of the University of
                Pennsylvania and a proud alumnus of Central High School (275). I
                received a BSE degree in computer science and a minor in
                mathematics from Penn. I am currently
                an Associate Software Engineer at CapTech Ventures in New York City.
              </p>
              <h1 className="pt-3 header-text">What I Do</h1>
              <p className="pt-3 main-text">
                The projects that give me the most joy are the ones that let me
                work across the full stack. My interests currently lie in
                algorithm design, game theory, software optimization, and
                humanitarian software development. Namely, one of the things I
                am most passionate about is making computer science both more
                accessible and more approachable.
              </p>
              <h1 className="pt-3 header-text">A Life Changing Experience</h1>
              <p className="pt-3 main-text">
                My current outlook on engineering was largely shaped by my time
                in Rwanda. I taught programming at the Gashora Girls Academy of
                Science and Technology and helped students with their personal
                projects. My time at the academy left me with an understanding
                of the impact computer science can have on the lives of others.
                Now, at the start of my professional career, I'm eager to build
                software that leaves a positive impact on the world and on those
                around me.
              </p>
            </Col>
            <Col lg={true}>
              <Image
                className="mt-5 p-1"
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
