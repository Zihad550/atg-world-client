import { faCaretDown, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./MainContentHeader.css";

const MainContentHeader = () => {
  return (
    <Navbar expand="md" className="main-content-header">
      <Container>
        <div className="d-flex justify-content-between content-toggler-wrapper">
          <Nav.Link className="active me-auto text-dark" href="#">
            All Posts(32)
          </Nav.Link>
          <Navbar.Toggle className="filter-toggler me-3">
            Filter: All <FontAwesomeIcon className="ms-3" icon={faCaretDown} />
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Article</Nav.Link>
            <Nav.Link href="#">Event</Nav.Link>
            <Nav.Link href="#">Education</Nav.Link>
            <Nav.Link href="#">Job</Nav.Link>
          </Nav>

          <button className="main-content-btn">
            Write a Post{" "}
            <FontAwesomeIcon
              className="main-content-btn-icon"
              icon={faCaretDown}
            />
          </button>
          <button className="main-content-btn">
            <FontAwesomeIcon icon={faUserFriends} /> Join Group
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainContentHeader;
