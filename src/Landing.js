import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Landing extends Component {
  render() {
    document.body.className = "css-selector";
    return (
      <React.Fragment>
        <Container fluid>
          <Row className="align-items-center overlay">
            <Col>
              <h1 className="landing-text">a little about me</h1>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Landing;
