import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Landing extends Component {
  render() {
    document.body.className = "css-selector";
    return (
      <React.Fragment>
        <Container>
          <Row className="align-items-center justify-content-md-center overlay">
            <Col lg={true}>
              <h1 className="line-1 landing-text anim-typewriter">
                Hi there. My name is Aavo. Welcome to my personal website.
              </h1>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Landing;
