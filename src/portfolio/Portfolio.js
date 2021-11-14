import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Container, Nav, NavDropdown, Col, Image, Row, Button, Card, Tab, Tabs } from 'react-bootstrap';
import Typed from 'react-typed';

import "./Portfolio.css";
import skillsJSON from "./skills.json";

// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

class Portfolio extends React.Component {
  constructor() {
    super();
    this.typedStrings = [
      "Full Stack Freelance Programmer",
      "Undergraduate At Ryerson University",
      "Artificial Intelligence Enthusiast",
      "Currently Seeking Work!"
    ];

    this.skillsJSON = skillsJSON;
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Thanussian Sharvananthan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link href="#">Skills</Nav.Link>
                <Nav.Link href="#">Projects</Nav.Link>
                <Nav.Link href="#">Experience</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
                <Nav.Link href="#">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <header className="d-flex justify-content-md-center align-items-center vh-100">
          <Container>
            <Row>
              <Col>
                <Image src="https://github.com/TSharvananthan.png" width={500} height={500} />
              </Col>

              <Col className="mx-auto my-5">
                <h1> Thanussian Sharvananthan </h1>
                <Typed strings={this.typedStrings} typeSpeed={20} backSpeed={20} loop />
                <br />
                <Button variant="primary" className="mt-5" size="lg">See More</Button>
              </Col>
            </Row>
          </Container>
        </header>

        <br />
        <br />

        <section className="skills">
          <Container>
            <h1 className="text-center"> Skills </h1>
            <Tabs defaultActiveKey={Object.keys(this.skillsJSON)[0]} id="uncontrolled-tab-example" className="mb-3">
              {
                Object.keys(this.skillsJSON).map(key => {
                  return (
                    <Tab eventKey={key} title={toTitleCase(key)}>
                      {
                        <Row xs={1} md={3} className="g-5">
                          {
                            this.skillsJSON[key].map((keyDict) => {
                              return (
                                <Col>
                                  <Card>
                                    <Card.Img variant="top" src={keyDict["imageLink"]} />
                                    <Card.Body>
                                      <Card.Title>{keyDict["technology"]}</Card.Title>
                                      <Card.Text>{keyDict["description"]}</Card.Text>
                                    </Card.Body>
                                  </Card>
                                  <Card.Footer>
                                    <small className="text-muted">{keyDict["duration"]}</small>
                                  </Card.Footer>
                                </Col>
                              )
                            })
                          }
                        </Row>
                      }
                    </Tab>
                  )
                })
              }
            </Tabs>
          </Container>
        </section>

        <br />
        <br />

        <section className="projects">
          <Container>
            <h1 className="text-center"> Projects </h1>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <p> First </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p> Second </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </section>

        <section className="experience">

        </section>

        <section className="contact">

        </section>

        <footer>

        </footer>
      </div>
    )
  }
}

export default Portfolio;