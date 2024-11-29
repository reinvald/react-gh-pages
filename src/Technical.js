import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Header from "./components/header";

class Technical extends Component {
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
              <h1 className="mt-5 header-text">Education</h1>
              <p className="pt-3 main-text">
                In 2020 I graduated with a BSE in computer science and a minor
                in mathematics from the University of Pennsylvania. Some of my
                relevant coursework includes Algorithmic Game Theory, Computer
                Architecture, Operating Systems, Data Structures and Algorithms,
                Scalable and Cloud Computing, Databases and Information Systems,
                Software Design, Discrete Mathematics, Number Theory, as well as
                Automata, Computability, and Complexity. I was recently accepted into
                Georgia Tech for a Master's in Computer Science and am slated to start in 2025.
              </p>
              <h1 className="pt-3 header-text">Technical Skills</h1>
              <p className="pt-3 main-text">
                I am most comfortable with Python, Java, JavaScript (React +
                Node.js, HTML + CSS), LaTeX, SQL + NoSQL, Git, Scrum, and
                Linux/OSX. I'm a beginner at Ruby (and Rails). I also have experience with C, OCaml, Selenium,
                MongoDB, Android, AWS (EMR, DynamoDB), and QA/automated testing. Currently I am teaching myself
                Golang by working through the cryptopals crypto challenges.
              </p>

              <h1 className="pt-3 header-text">Past, Present, Future</h1>
              <p className="pt-3 main-text">
                I currently work as a Senior Software Engineer at Capital One.
                My project work involves building serverless cloud solutions using AWS (Lambda, Step Functions, etc.) that
                are designed to gracefully handle high throughput/traffic. 
                In between graduating college and joining Capital One, I working as a full stack engineer in the
                tech consulting space, working for a variety of clients and leveraging a variety of tech stacks.
              </p>
              <p className="pt-3 main-text">
                <i>Complete resume available upon request.</i>
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
                    src={require("./img/kisspng-ruby-on-rails-programming-language-website-develop-timisoara-ruby-on-rails-community-timisoara-roma-5b8d85a3691123.4918315815360014434304.png")}
                    alt="Ruby"
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
