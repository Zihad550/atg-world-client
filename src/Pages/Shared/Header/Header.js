import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className="img-fluid logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbar-nav">
          <div className="input-group search-field d-flex align-items-center mx-auto justify-content-evenly">
            <span className="">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <div className="">
              <input
                className="bg-transparent w-100 my-auto border-transparent"
                type="search"
                placeholder="Search for your favorite groups in ATG"
              />
            </div>
          </div>

          <div>
            <p>Create account. It's free!</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
