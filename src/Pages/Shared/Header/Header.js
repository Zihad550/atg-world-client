import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import CreateAccountModal from "../../Authentication/CreateAccountModal/CreateAccountModal";
import "./Header.css";

const Header = () => {
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const handleShowCreateAccountModal = () => setShowCreateAccountModal(true);
  return (
    <>
      <Navbar expand="lg" className="my-3 p-0">
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
