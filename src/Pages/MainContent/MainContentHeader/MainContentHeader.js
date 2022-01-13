import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./MainContentHeader.css";

const MainContentHeader = () => {
  return (
    <Navbar expand="sm" className="main-content-header">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="active" href="#">
              All Posts(32)
            </Nav.Link>
            <Nav.Link href="#">Article</Nav.Link>
            <Nav.Link href="#">Event</Nav.Link>
            <Nav.Link href="#">Education</Nav.Link>
            <Nav.Link href="#">Job</Nav.Link>
          </Nav>

          <Button>Write a Post</Button>
          <Button>
            <FontAwesomeIcon icon={faUserFriends} /> Join Group
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainContentHeader;
