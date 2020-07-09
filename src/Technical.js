import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Header from "./components/header";

class Technical extends Component {
  render() {
    document.body.className = "body-bg";
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
              <h1 className="mt-5 header-text">education</h1>
              <p className="pt-3 main-text">
                I recently graduated with a BSE in computer science and a minor
                in mathematics from the University of Pennsylvania. Some of my
                relevant coursework includes Algorithmic Game Theory, Computer
                Architecture, Operating Systems, Data Structures and Algorithms,
                Scalable and Cloud Computing, Databases and Information Systems,
                Software Design, Discrete Mathematics, Number Theory, as well as
                Automata, Computability, and Complexity. I also hold a BA degree
                from the Central High School of Philadelphia.
              </p>
              <h1 className="pt-3 header-text">technical skills</h1>
              <p className="pt-3 main-text">
                I am most comfortable with Python, Java, JavaScript (React +
                Node.js, HTML + CSS), LaTeX, SQL + NoSQL, Git, Scrum, and
                Linux/OSX. I also have experience with C, OCaml, Selenium,
                MongoDB, Android, AWS (EMR, DynamoDB), and QA/automated testing.
              </p>

              <h1 className="pt-3 header-text">past, present, future</h1>
              <p className="pt-3 main-text">
                Last summer I was a software development intern at Ellucian. I
                spent this time working directly inbetween the devs and the QA
                team to optimize the automated testing suite and overall
                workflow. I just recently finished working on and presenting
                AMiAI, a senior design project studying the potential for
                language models (namely OpenAI's GPT2) to be exploited to create
                malicious product reviews. I am currently working on a handful
                of small Python projects and with Penn's Linguistic Data
                Consortium. I am an incoming software engineer at Publicis
                Sapient.
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
