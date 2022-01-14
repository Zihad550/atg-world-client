import {
  faArrowLeft,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import CreateAccountModal from "../../Authentication/CreateAccountModal/CreateAccountModal";
import "./Header.css";

const Header = () => {
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const handleShowCreateAccountModal = () => setShowCreateAccountModal(true);
  return (
    <>
      <Navbar expand="lg" className="my-3 p-0 navbar">
        <Container>
          <Navbar.Toggle>
            <FontAwesomeIcon className="toggler-icon" icon={faArrowLeft} />
          </Navbar.Toggle>
          <Navbar.Brand href="#home" className="d-none d-sm-block">
            <img className="img-fluid logo" src={logo} alt="" />
          </Navbar.Brand>
          <div>
            <Button variant="outlined-secondary" className="join-btn ">
              Join Group
            </Button>
          </div>

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
              <p className="m-0">
                Create account.{" "}
                <span
                  onClick={handleShowCreateAccountModal}
                  className="text-primary cursor-pointer"
                >
                  It's free!{" "}
                  <FontAwesomeIcon icon={faCaretDown} className="text-dark" />
                </span>
              </p>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* create account modal */}
      <CreateAccountModal
        showCreateAccountModal={showCreateAccountModal}
        setShowCreateAccountModal={setShowCreateAccountModal}
      />
    </>
  );
};

export default Header;
