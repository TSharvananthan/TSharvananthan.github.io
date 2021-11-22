import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Navbar, Container, Nav, NavDropdown, Col,
  Image, Row, Button, Card, Tab, Tabs, Badge,
  Stack, Form
} from 'react-bootstrap';
import Typed from 'react-typed';

import "./Portfolio.css";
import skillsJSON from "./skills.json";
import projectsJSON from "./projects.json"
import hub from './hub.png';

// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

const completeBadge = () => {
  return <Badge bg="success"> Complete </Badge>
}

const workInProgressBadge = () => {
  return <Badge bg="warning" text="dark"> Work In Progress </Badge>
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
    this.projectsJSON = projectsJSON;

    this.skillLogoImages = require.context('./skills-logos/png', true);
  }

  render() {
    return (
      <div>
        <Navbar id="nav" bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Thanussian Sharvananthan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link>Skills</Nav.Link>
                <Nav.Link>Projects</Nav.Link>
                <Nav.Link>Experience</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                <Nav.Link href="https://than.hashnode.dev" target="blank">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <header id="header" className="d-flex justify-content-md-center align-items-center vh-100">
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

        <section id="skills">
          <h1 className="text-center"> Skills </h1>
          <Container>
            <Tabs defaultActiveKey={Object.keys(this.skillsJSON)[0]} id="uncontrolled-tab-example" className="mb-3">
              {
                Object.keys(this.skillsJSON).map(key => {
                  return (
                    <Tab eventKey={key} title={toTitleCase(key)}>
                      {
                        <Row xs={1} md={3} className="g-5">
                          {
                            this.skillsJSON[key].map((keyDict) => {
                              let link = keyDict["imageLink"];
                              let skillImage = require( `${ link }` ).default
                              console.log(link);
                              return (
                                <Col>
                                  <Card>
                                    <Card.Img variant="top" src={skillImage} />
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

        <section id="projects">
          <h1 className="text-center">Projects</h1>
          <Container className="mt-3">
            <Tab.Container id="left-tabs-example" defaultActiveKey={this.projectsJSON[0]["name"]}>
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    {
                      this.projectsJSON.map(project => {
                        return (
                          <Nav.Item> <Nav.Link eventKey={ project["name"] }> { project["name"] } </Nav.Link> </Nav.Item>
                        )
                      })
                    }
                  </Nav>
                </Col>

                <Col>
                  <Tab.Content>
                    {
                      this.projectsJSON.map(project => {
                        return (
                          <Tab.Pane eventKey={ project["name"] }>
                            <p> Technologies Used: <i> { project["depandancies"] } </i> </p>
                            <a href={ project["github"] } target="blank"> Github </a>
                            <br />
                            { project["isWorkInProgress"] ? workInProgressBadge() : completeBadge() }
                            <br /> <br />
                            <p> { project["description"] } </p>
                          </Tab.Pane>
                        )
                      })
                    }
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </section>

        <br />
        <br />

        <section id="experience">
          <h1 className="text-center">Experience</h1>
          <Container className="mt-3">
            <Row className="align-items-center">
              <Col> <img src={hub} width={900} /> </Col>
              <Col>
                <p>
                  Since December of 2020, a few peers and myself founded the Victoria Park Hub Code Camp. From the start, the mission statement was simple: <b> provide free coding education</b>. Sponsored and hosted by the <a href="https://www.centraleasthealthline.ca/displayservice.aspx?id=143120" target="blank">Working Women Community Centre</a>, we taught elements of Python and CS Theory/Competitive Programming to middle/high school students alike! I taught over 20 engaged and ecstatic students that wanted to get behind the scenes and enter the lives of a programmer. Nowadays, I oversee said class and maintain relations with various students.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <br />
        <br />

        <section id="contact">
          <h1 className="text-center">Contact Me</h1>
          <Container className="mt-3">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email"  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formMessageTextField">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100"> Submit </Button>
            </Form>
          </Container>
        </section>

        <br />
        <br />

        <footer className="page-footer">
          <Container>
            <Row>
              <Col>1 of 3</Col>
              <Col xs={5}>Sharvananathan</Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}

const PortfolioApp = () => {
  return (
    <div>
      <Portfolio />
    </div>
  )
}

export default PortfolioApp;