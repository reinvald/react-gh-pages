import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Header from "./components/header";

class Fun extends Component {
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
              <h1 className="mt-5 header-text">Interests and Hobbies</h1>
              <p className="pt-1 main-text">
                Some of the things that I am most passionate about in life are
                music (listening to and collecting vinyl), sneaker collecting
                (hoarding in the eyes of some), coffee, the 76ers, veganism (4
                years strong!), weightlifting, cycling, and of course, my
                friends and family ❤
              </p>
              <h1 className="pt-1 header-text">Music</h1>
              <p className="pt-1 main-text">
                I think a person's taste in music says a lot of them. Here are
                some of my favorite artists (new and old): Bob Dylan, LCD
                Soundsystem, The Talking Heads, Nas, Yung Lean, Kaytranada,
                Sufjan Stevens, Wilco, Whitney, Daft Punk, The Beatles, The
                Grateful Dead, HOMESHAKE, Henry Mancini, The Postal Service,
                Glenn Miller, MGMT...
              </p>
              <h1 className="pt-1 header-text">Books</h1>
              <p className="pt-1 main-text">
                I've been pushing myself to read more. Some of my recent
                favorites have been <i>The Winter Fortress</i> by Neal Bascomb,{" "}
                <i>Hard-Boiled Wonderland and the End of the World</i> by Haruki
                Murakami, and <i>Born a Crime</i> by Trevor Noah. I'm now
                reading{" "}
                <i>How to Do Nothing: Resisting the Attention Economy</i> by
                Jenny Odell.
              </p>
              <h1 className="pt-1 header-text">Film</h1>
              <p className="pt-1 main-text">
                Movies are a big part of my life, too. I don't watch them all
                too often, but some of my favorites are Yellow Submarine,
                Raising Arizona, A Town Called Panic, and Full Metal Jacket.
              </p>
              <h1 className="pt-1 header-text">Misc</h1>
              <p className="pt-1 main-text">
                Other things I'm a big fan of: the <i>Halo</i> and{" "}
                <i>BioShock</i> games, cats, and Art Deco.
              </p>
            </Col>
            <Col lg={true}>
              <Image
                className="mt-2 p-2"
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
