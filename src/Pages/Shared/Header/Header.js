import {
faArrowLeft,
faCaretDown,
faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import CreateAccountModal from "../../Authentication/CreateAccountModal/CreateAccountModal";
import "./Header.css";

const Header = () => {
  const [user, setUser] = useState({});
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const handleShowCreateAccountModal = () => setShowCreateAccountModal(true);
  const userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/user/register/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  const logOut = () => {
    setUser("");
    localStorage.clear();
  };

  return (
    <>
      <Navbar expand="md" className="my-3 p-0 navbar">
        <Container>
          <div className="d-flex justify-content-between navbar-toggler-wrapper ">
            <Navbar.Toggle>
              <FontAwesomeIcon className="toggler-icon" icon={faArrowLeft} />
            </Navbar.Toggle>
            <Navbar.Brand href="#home" className="d-none d-md-block">
              <img className="img-fluid logo" src={logo} alt="" />
            </Navbar.Brand>
            <div className="d-block d-md-none">
              <Button variant="outlined-secondary" className="join-btn ">
                Join Group
              </Button>
            </div>
          </div>

          <Navbar.Collapse className="navbar-collapse">
            <div className="input-group search-field d-flex align-items-center mx-auto justify-content-evenly ">
              <span className="">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <div>
                <input
                  className="bg-transparent w-100 my-auto border-transparent"
                  type="search"
                  placeholder="Search for your favorite groups in ATG"
                />
              </div>
            </div>

            <div>
              {user?.email ? (
                <div className="d-flex align-items-center">
                  <h5 className="me-2 mb-0">{user.name}</h5>
                  <Button onClick={logOut}>Log Out</Button>
                </div>
              ) : (
                <p className="m-0">
                  Create account.
                  <span
                    onClick={handleShowCreateAccountModal}
                    className="text-primary cursor-pointer"
                  >
                    It's free!{" "}
                    <FontAwesomeIcon icon={faCaretDown} className="text-dark" />
                  </span>
                </p>
              )}
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
