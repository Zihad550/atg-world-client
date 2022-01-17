import { faCaretDown, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import CreatePost from "../CreatePost/CreatePost";
import "./MainContentHeader.css";

const MainContentHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  return (
    <>
      <Navbar expand="md" className="main-content-header">
        <Container>
          <div className="d-flex justify-content-between content-toggler-wrapper">
            <Nav.Link className="active me-auto text-dark" href="#">
              All Posts(32)
            </Nav.Link>
            <Navbar.Toggle className="filter-toggler me-3">
              Filter: All{" "}
              <FontAwesomeIcon className="ms-3" icon={faCaretDown} />
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Article</Nav.Link>
              <Nav.Link href="#">Event</Nav.Link>
              <Nav.Link href="#">Education</Nav.Link>
              <Nav.Link href="#">Job</Nav.Link>
            </Nav>

            <Button
              onClick={handleOpen}
              variant="secondary"
              className="main-content-btn"
            >
              Write a Post{" "}
              <FontAwesomeIcon
                className="main-content-btn-icon"
                icon={faCaretDown}
              />
            </Button>
            <Button className="main-content-btn">
              <FontAwesomeIcon icon={faUserFriends} /> Join Group
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* create post modal */}
      <CreatePost show={show} handleClose={handleClose} />
    </>
  );
};

export default MainContentHeader;
